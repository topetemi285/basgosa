"use client";
import {
  Title,
  Paper,
  Container,
  Button,
  TextInput,
  Loader,
  Text,
  Group,
  Stack,
} from "@mantine/core";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

const numberOfInputs = 4;
function OtpScreen() {
  const router = useRouter();
  // const {user} = useUserHook();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  // SO you have to check for null value of email

  // if(!email){
  //   console.log("Email is missing from URL parameters")
  // }

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(Array(numberOfInputs).fill(""));
  const inputRefs = useRef(Array(numberOfInputs).fill(null));

  // useEffect(() => {}, []);

  const handleInputChange = (
    email: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (isNaN(parseInt(email.target.value, 10))) return;

    const value = email.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < numberOfInputs - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      // const token = String(otp).split(",").join("");
      const token = otp.join("");

      await axios.get(`/api/auth/verify-otp?token=${token}`);
      setLoading(false);

      toast.success("success");

      router.push(`/auth/reset-password?email=${email}&token=${token}`);
    } catch (e) {
      setLoading(false);

      toast.error("Invalid OTP");
      console.error("[INVALID ERROR]:", e);
    }
  };

  return (
    <Container size={420} my={50}>
      <Paper withBorder shadow="lg" p={30} radius="lg">
        <Stack align="center">
          <Title order={2} ta="center">
            Verify OTP
          </Title>
          <Text size="sm" c="dimmed" ta="center">
            Enter the OTP sent to your email
          </Text>
        </Stack>

        <form onSubmit={handleSubmit}>
          <Group justify="center" mt="md">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(ref) => {
                  inputRefs.current[index] = ref!;
                }}
                maxLength={1}
                size="lg"
                w={50}
                ta="center"
                variant="filled"
              />
            ))}
          </Group>

          <Group justify="right" mt="sm">
            <Text size="sm" c="blue" style={{ cursor: "pointer" }}>
              Resend Code?
            </Text>
          </Group>

          <Button
            type="submit"
            fullWidth
            mt="lg"
            size="md"
            radius="md"
            loading={loading}
          >
            {loading ? <Loader size="sm" color="white" /> : "Submit"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default OtpScreen;
