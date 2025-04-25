/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Container,
  Title,
  Text,
  Table,
  Button,
  Group,
  TextInput,
  NumberInput,
  Select,
  Paper,
} from "@mantine/core";
import { toast, ToastContainer } from "react-toastify";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import React, { useEffect, useState } from "react";
import axios from "axios";

function PurchaseScreen() {
  const [drugs, setDrugs] = useState<
    { id: number; name: string; price: number }[]
  >([]);
  const [cart, setCart] = useState<any[]>([]);
  const [buyerName, setBuyerName] = useState("");

  useEffect(() => {
    fetchDrugs();
  }, []);

  const fetchDrugs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/product/all"
      );
      if (response.data) {
        setDrugs(response.data);
      }
    } catch (error) {
      toast.error("Failed to fetch Drugs");
    }
  };

  const addToCart = (drugId: any, quantity: any) => {
    const drug = drugs.find((d) => d.id === drugId);
    if (!drug) return;

    setCart((prev) => {
      const existingItem = prev.find((item) => item.drugId === drugId);
      if (existingItem) {
        return prev.map((item) =>
          item.drugId === drugId ? { ...item, quantity } : item
        );
      }
      return [
        ...prev,
        { drugId, name: drug.name, quantity, price: drug.price },
      ];
    });
  };

  const removeFromCart = (drugId: any) => {
    setCart((prev) => prev.filter((item) => item.drugId !== drugId));
  };

  const generatePDF = (invoices: any) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("ECWA COMMUNITY HEALTH INITIATIVE HEAQUARTERS", 15, 15);

    doc.setFontSize(12);
    doc.text(`Invoice No: ECHI- 00${invoices.id}`, 50, 30);
    doc.text(`Buyer Name: ${invoices.buyerName}`, 15, 40);
    doc.text(
      `Date: ${new Date(invoices.createdAt).toLocaleDateString()}`,
      15,
      50
    );

    const tableColumn = ["Drug Name", "Quantity", "Price", "Total"];
    const tableRows = invoices.items.map((item: any) => [
      item.drugName,
      item.quantity,
      item.price,
      item.quantity * item.price,
    ]);

    (autoTable as any)(doc, {
      startY: 60,
      head: [tableColumn],
      body: tableRows,
    });

    const finalY = (doc as any).lastAutoTable?.finalY || 60;

    doc.setFontSize(14);
    doc.text(`Total: ${invoices.totalPrice}`, 15, finalY + 10);

    doc.save(`Invoice_${invoices.id}.pdf`);
  };

  const handleCheckout = async () => {
    if (!buyerName || cart.length === 0) {
      toast.error("Please enter a buyer name and add items to the cart");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/purchase/create",
        {
          buyerName,
          items: cart.map(({ drugId, quantity, price }) => ({
            drugId,
            quantity,
            price,
          })),
        }
      );
      toast.success("Purchase successful! Invoice generated");
      setCart([]);
      setBuyerName("");

      const invoiceResponse = await axios.get(
        `http://localhost:3000/api/v1/invoices/${response.data.id}`
      );
      generatePDF(invoiceResponse.data);
    } catch (error) {
      toast.error("Failed to complete purchase");
      console.log(error);
    }
  };

  return (
    <Container
      style={{
        marginTop: "30",
      }}
    >
      <Title order={3} mt={"lg"}>
        Purchase Drugs
      </Title>

      <form>
        <Group justify="center" gap={"xl"} grow m={"lg"}>
          <TextInput
            label="Buyer Name"
            placeholder="Enter Buyers Name"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            required
            // mb={"sm"}
          />

          <Select
            label="Select Drug"
            data={drugs.map((drug) => ({
              value: String(drug.id),
              label: drug.name,
            }))}
            placeholder="Choose a drug"
            onChange={(value) => addToCart(Number(value), 1)}
          />
        </Group>
      </form>

      <Table.ScrollContainer minWidth={500}>
        <Table
          highlightOnHover
          striped
          // horizontalSpacing="md"
          // verticalSpacing="md"
          // stickyHeaderOffset={10}
          withTableBorder
          withColumnBorders
          withRowBorders
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ textAlign: "left", width: "6%" }}>
                S/N
              </Table.Th>
              <Table.Th style={{ textAlign: "left", width: "25%" }}>
                Drug Name
              </Table.Th>
              <Table.Th style={{ textAlign: "center", width: "15%" }}>
                Quantity
              </Table.Th>
              <Table.Th style={{ textAlign: "center", width: "15%" }}>
                Price (₦)
              </Table.Th>
              {/* <th style={{ textAlign: "left", width: "40%" }}>Suppliers</th> */}
              <Table.Th style={{ textAlign: "left", width: "25%" }}>
                Total
              </Table.Th>
              <Table.Th style={{ textAlign: "center", width: "15%" }}>
                Remove
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {cart.map((item, index) => (
              <Table.Tr key={item.drugId}>
                <Table.Td style={{ textAlign: "left" }}>{index + 1}</Table.Td>
                <Table.Td style={{ textAlign: "left" }}>{item.name}</Table.Td>
                <Table.Td style={{ textAlign: "center" }}>
                  <NumberInput
                    min={1}
                    value={item.quantity}
                    onChange={(value) => addToCart(item.drugId, value)}
                  />
                </Table.Td>
                <Table.Td style={{ textAlign: "center" }}>
                  {item.price}
                </Table.Td>
                <Table.Td style={{ textAlign: "center" }}>
                  {item.quantity * item.price}
                </Table.Td>
                <Table.Td style={{ textAlign: "center" }}>
                  <Button
                    color="red"
                    size="xs"
                    onClick={() => removeFromCart(item.drugId)}
                  >
                    ❌
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <Paper withBorder shadow="md" p={"lg"} m={"lg"}>
        <Text>
          Total:{" "}
          {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)}
        </Text>
      </Paper>

      <Button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleCheckout}
      >
        <span> Checkout & Generate Invoice</span>
      </Button>
      <ToastContainer
        autoClose={3000}
        position="top-center"
        closeOnClick={true}
        hideProgressBar={true}
        newestOnTop={true}
        theme="colored"
      />
    </Container>
  );
}

export default PurchaseScreen;
