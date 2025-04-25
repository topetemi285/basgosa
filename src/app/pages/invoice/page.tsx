import { Container, Title, Text } from "@mantine/core";
// import { useRouter } from "next/navigation";
import React from "react";

function InvoiceScreen() {
  // const router = useRouter();

  return (
    <Container>
      <Title>Invoice</Title>
      <Text mt="md">Your Invoice has been generated </Text>
    </Container>
  );
}

export default InvoiceScreen;
