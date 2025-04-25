/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Container,
  Title,
  Paper,
  TextInput,
  Button,
  NumberInput,
  Table,
  Group,
} from "@mantine/core";
import axios from "axios";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function CreateInvoiceScreen() {
  const [loading, setLOading] = useState(false);
  const [invoice, setInvoice] = useState({
    invoiceNumber: "",
    buyerName: "",
    products: [{ name: "", quantity: 1, price: 0 }],
  });

  const [product, setProduct] = useState({ name: "", quantity: 1, price: 0 });

  // const router = useRouter();

  const handleChange = (e :any) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const handleProductChange = (field : any, value : any) => {
    setProduct({ ...product, [field]: value });
  };

  const addProduct = () => {
    if (product.name && product.quantity > 0 && product.price >= 0) {
      setInvoice({
        ...invoice,
        products: [...invoice.products, product],
      });
      setProduct({ name: "", quantity: 1, price: 0 });
    }
  };

  const removeProduct = (index:any) => {
    const newProducts = invoice.products.filter((_, i) => i !== index);
    setInvoice({ ...invoice, products: newProducts });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      setLOading(true);
      // const createdInvoice = await axios.post(
      //   `${process.env.NEXTAUTH_URL}/invoice/add`,
      //   invoice
      // );
      const createdInvoice = await axios.post(
        "http://localhost:3000/api/v1/invoice/add",
        invoice
      );

      if (createdInvoice) {
        setLOading(false);
        toast.success(`${invoice.buyerName} invoice is created`);
      } else {
        setLOading(false);
        toast.error("Error in creating invoice");
      }
    } catch (error) {
      setLOading(false);
      toast.error("An error occurred");
      console.log(error);
    }

    // router.push("/");
  };
  const getTotalAmount = () => {
    return invoice.products.reduce((sum, p) => sum + p.quantity * p.price, 0);
  };
  return (
    <Container>
      <Title>ECHI DRUG STORE INVOICE SYSTEM</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <Group justify="center" gap="xl" grow>
            <TextInput
              label="Invoice NUmber"
              name="invoiceNumber"
              placeholder="Invoice Number"
              value={invoice.invoiceNumber}
              onChange={handleChange}
              required
            />
            <TextInput
              label=" Buyer's Name"
              name="buyerName"
              placeholder="Buyer's Name"
              value={invoice.buyerName}
              onChange={handleChange}
              required
            />
          </Group>

          <Title order={3} mt="md">
            ADD PRODUCT
          </Title>
          <Group justify="center" gap={"xl"} grow>
            <TextInput
              label="Product Name"
              placeholder="PCM 500mg Cap"
              value={product.name}
              onChange={(e) => handleProductChange("name", e.target.value)}
              required
              // mb={"sm"}
            />

            <NumberInput
              label="Quantity"
              min={1}
              value={product.quantity}
              onChange={(value) => handleProductChange("quantity", value)}
              required
              // mb={"sm"}
            />

            <NumberInput
              label="Price (₦)"
              min={0}
              value={product.price}
              onChange={(value) => handleProductChange("price", value)}
              required
              // mb={"sm"}
            />
          </Group>

          <Button onClick={addProduct} mt={"sm"} mb={"sm"}>
            ➕ Add Product
          </Button>

          <Title order={3}>Product List</Title>

          <Table highlightOnHover withTableBorder striped>
            <thead>
              <tr>
                <th style={{ textAlign: "left", width: "10%" }}>S/N</th>
                <th style={{ textAlign: "left", width: "40%" }}>
                  Product Name
                </th>
                <th style={{ textAlign: "left", width: "19%" }}>Quantity</th>
                <th style={{ textAlign: "center", width: "19%" }}>Price (₦)</th>
                <th style={{ textAlign: "left", width: "19%" }}>Total (₦)</th>
                <th style={{ textAlign: "right", width: "19%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoice.products.map((p, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "left" }}>{index + 1}</td>
                  <td style={{ textAlign: "left" }}>{p.name}</td>
                  <td style={{ textAlign: "left" }}>{p.quantity}</td>
                  <td style={{ textAlign: "center" }}>{p.price}</td>
                  <td style={{ textAlign: "left" }}>{p.quantity * p.price}</td>
                  <td style={{ textAlign: "right" }}>
                    <Button
                      color="red"
                      size="xs"
                      onClick={() => removeProduct(index)}
                    >
                      {" "}
                      ❌
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Title order={3} mt={"lg"}>
            Total Amount: <b>₦{getTotalAmount().toFixed(2)}</b>
          </Title>

          <Button type="submit" mt={"lg"} fullWidth onClick={handleSubmit}>
            {loading ? " loading" : "Create Invoice"}
          </Button>
        </form>
        <ToastContainer
          autoClose={3000}
          position="top-center"
          closeOnClick={true}
          hideProgressBar={true}
          newestOnTop={true}
          theme="colored"
        />
      </Paper>
    </Container>
  );
}

export default CreateInvoiceScreen;
