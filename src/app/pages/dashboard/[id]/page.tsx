/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Button,
  Card,
  Container,
  Group,
  Loader,
  Modal,
  NumberInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface Drug {
  id: number;
  name: string;
  quantity: number;
  price: number;
  expiryDate?: string;
  stock: {
    id: number;
    receivedDate: string;
    quantityReceived: number;
    expiryDate: string;
    supplierName: string;
    supplierContact: string;
    suppliersInvoiceNumber: string;
  }[];
}
function ProductDetailScreen() {
  const { id } = useParams();

  const [products, setProducts] = useState<Drug | null>(null);
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);
  const [stock, setStock] = useState({
    drugId: id,
    quantityReceived: 0,
    expiryDate: "",
    receivedDate: "",
    supplierName: "",
    supplierContact: "",
    suppliersInvoiceNumber: "",
    price: 0,
    receivedBy: "",
  });

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);

    try {
      const response = await axios.get<Drug>(
        `http://localhost:3000/api/v1/product/${id}`
      );
      setProducts(response.data);
    } catch (error) {
      toast.error("Product not Found");
    }
    setLoading(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const stockDrugs = await axios.post(
        "http://localhost:3000/api/v1/stock/add",
        stock
      );
      if (stockDrugs) {
        console.log(stockDrugs);
        setLoading(false);
        toast.success(`${stock.quantityReceived} has been added`);
        setOpened(false);
        fetchProduct();
      } else {
        setLoading(false);
        toast.error("An Error Occurred");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred");
      console.log(error);
    }
  };

  if (loading) return <Loader size={"lg"} mt={"md"} />;

  const handleInputChange = (field: string, value: any) => {
    setStock((prev) => ({
      ...prev,
      [field]: field === "expiryDate" && value ? value.toISOString() : value,
      [field]: field === "receivedDate" && value ? value.toISOString() : value,
    }));
  };
  return (
    <Container>
      <Title mb="mb">Drug Details</Title>

      {products ? (
        <Card shadow="sm" p={"lg"} mt={"md"} radius={"md"} withBorder>
          <Stack
            h={30}
            bg="var(--mantine-color-body)"
            align="flex-end"
            justify="flex-start"
            gap="sm"
          >
            <Button
              type="submit"
              style={{ backgroundColor: "Green", color: "white" }}
              onClick={() => {
                setOpened(true);
              }}
            >
              <span>➕ Add Drug</span>
            </Button>
          </Stack>
          <Text size="lg">{products.name}</Text>
          <Text>💰 Price: ₦{products.price}</Text>
          <Text>📦 Quantity: {products.quantity}</Text>
          <Text>🗓️ Expiry Date: {products.expiryDate}</Text>

          <Title order={4} mt={"lg"}>
            Stock Details
          </Title>
          {products.stock.length > 0 ? (
            products.stock.map((stockItem) => (
              <Card
                key={stockItem.id}
                shadow="xs"
                p="md"
                mt={"sm"}
                radius={"md"}
                withBorder
              >
                <Text>
                  📆 Received:{" "}
                  {new Date(stockItem.receivedDate).toLocaleDateString()}
                </Text>
                <Text>🔢 Quantity Received: {stockItem.quantityReceived}</Text>
                <Text>🗓️ Expiry: {stockItem.expiryDate}</Text>
                <Text>🏢 Supplier: {stockItem.supplierName}</Text>
                <Text>📞 Contact: {stockItem.supplierContact}</Text>
                <Text>📜 Invoice: {stockItem.suppliersInvoiceNumber}</Text>
              </Card> //   onChange={(value) => handleInputChange("quantity", value)}
            ))
          ) : (
            <Text color="gray">NO STOCK AVAILABLE</Text>
          )}
        </Card>
      ) : (
        <Text color="gray">NO PRODUCT FOUND.</Text>
      )}

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Fill the form for drug Received"
        centered
      >
        <form onSubmit={handleSubmit}>
          <Group justify="center" gap={"xl"} grow>
            <TextInput //   onChange={(value) => handleInputChange("price", value)}
              label="Suppliers Name"
              placeholder="Company Name"
              value={stock.supplierName}
              onChange={(e) =>
                handleInputChange("supplierName", e.target.value)
              }
              required
              mb={"sm"}
            />

            <TextInput
              label="Suppliers Contact "
              placeholder="user@gmail.com"
              value={stock.supplierContact}
              onChange={(e) =>
                handleInputChange("supplierContact", e.target.value)
              }
              required
              mb={"sm"}
            />
          </Group>
          <Group justify="center" gap={"xl"} grow>
            <TextInput
              label="Suppliers Invoice NUmber "
              placeholder="ECPL-0000"
              value={stock.suppliersInvoiceNumber}
              onChange={(e) =>
                handleInputChange("suppliersInvoiceNumber", e.target.value)
              }
              required
              mb={"sm"}
            />
            <NumberInput
              label="Price (₦)"
              min={0}
              value={stock.price}
              onChange={(value) => handleInputChange("price", value)}
              required
              // mb={"sm"}
            />
          </Group>
          <Group justify="center" gap={"xl"} grow>
            <DateInput
              value={stock.expiryDate ? new Date(stock.expiryDate) : null}
              onChange={(value) => handleInputChange("expiryDate", value)}
              label="Expiring Date"
              placeholder="ExPiring Date"
            />

            <TextInput
              label="Received By"
              placeholder="store keeper"
              value={stock.receivedBy}
              onChange={(e) => handleInputChange("receivedBy", e.target.value)}
              required
              mb={"sm"}
            />
          </Group>
          <Group justify="center" gap={"xl"} grow>
            <DateInput
              value={stock.receivedDate ? new Date(stock.receivedDate) : null}
              onChange={(value) => handleInputChange("receivedDate", value)}
              label="Received Date"
              placeholder="Received Date"
            />

            <NumberInput
              label="Quantity Received"
              min={1}
              value={stock.quantityReceived}
              onChange={(value) => handleInputChange("quantityReceived", value)}
              required
              mb={"sm"}
            />
          </Group>

          <Group mt="md">
            <Button type="submit" mt={"sm"} mb={"sm"}>
              {loading ? "loading" : "➕ Add Product"}
            </Button>
          </Group>
        </form>
      </Modal>
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

export default ProductDetailScreen;
