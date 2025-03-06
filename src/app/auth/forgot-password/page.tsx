"use client";
import {
  Button,
  Text,
  Container,
  Paper,
  TextInput,
  Title,
} from "@mantine/core";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  email: string;
};

type FormAction = {
  type: "UPDATE_FORMDATA";
  payload: Partial<FormData>;
};

const initialState: FormData = {
  email: "",
};

const formReducer = (state: FormData, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FORMDATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

function ForgotPasswordScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = useReducer(formReducer, initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      type: "UPDATE_FORMDATA",
      payload: { [event.target.name]: event.target.value },
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/forgot-password", formData);
      console.log("[DATA FROM PAGE] :: ", data);
      if (data?.ok == false) {
        setLoading(false);
        toast.error("An error ocurred");
      } else {
        setLoading(false);
        toast.success("Success, Check your email for an OTP token");
      }
      router.push(`/auth/forgo
        t-password/otp?email=${formData.email}`);
    } catch (e) {
      setLoading(false);
      toast.error("An error occurred");
      console.error("[LOGIN ERROR]:", e);
    }
  };

  return (
    <Container size={430} my={40}>
      <Title>FORGOT PASSWORD</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <Text pb={3}>
            Please enter your email address. You will receive a code to create a
            new password via email.
          </Text>
          <TextInput
            label="Email"
            name="email"
            placeholder="yourEmail@gmail.com"
            required
            value={formData.email}
            onChange={handleChange}
          />

          {loading ? (
            <Button
              type="button"
              className="bg-green-700 text-white h-12 hover:bg-green-300 w-full rounded-full py-3 cursor-default"
            >
              loading...
            </Button>
          ) : (
            <Button
              className="bg-blue-700 text-white h-12 hover:bg-blue-300 w-full rounded-full py-3 cursor-default"
              fullWidth
              mt="xl"
              type="submit"
            >
              Submit
            </Button>
          )}
        </form>
        <ToastContainer
          autoClose={3000}
          position="top-center"
          closeOnClick={true}
          hideProgressBar={false}
          newestOnTop={true}
          theme="colored"
        />
      </Paper>
    </Container>
  );
}

export default ForgotPasswordScreen;
