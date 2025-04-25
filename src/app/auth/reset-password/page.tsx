"use client";
import {
  Container,
  Title,
  Text,
  TextInput,
  Button,
  Paper,
} from "@mantine/core";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useReducer, useState } from "react";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";

type FormData = {
  newPassword: string;
  confirmPassword: string;
};

type FormAction = {
  type: "UPDATE_FORMDATA";
  payload: Partial<FormData>;
};

const initialState: FormData = {
  newPassword: "",
  confirmPassword: "",
};

const formReducer = (state: FormData, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FORMDATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
function ResetPasswordScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = useReducer(formReducer, initialState);

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

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
      if (!formData.newPassword && !formData.confirmPassword) {
        setLoading(false);
        return "Fields cannot be empty";
      }

      // if (formData.newPassword !== formData.confirmPassword) {
      //   setLoading(false);
      //   return "Passwords do not match!";
      // }

      await axios.patch(
        `/api/auth/reset-password?email=${email}&token=${token}`,
        formData
      );
      setLoading(false);
      toast.success("Password reset succesfully");

      router.push('"/auth/signin"');
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred");
      console.log("[RESET PASSWORD ERROR] :: ", error);
    }
  };

  return (
    <Container size={430} my={40}>
      <Title>RESET PASSWORD</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <Text pb={3}>Reset Password</Text>

          <TextInput
            label="New Password"
            name="newPassword"
            placeholder="New Password"
            required
            value={formData.newPassword}
            onChange={handleChange}
          />

          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm new Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <Button fullWidth mt="xl" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Reset Password"}
          </Button>
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

export default ResetPasswordScreen;
