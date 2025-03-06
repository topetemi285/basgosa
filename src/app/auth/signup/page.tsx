"use client";
import {
  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Checkbox,
  Button,
} from "@mantine/core";
// import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useReducer } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  name: string;
  email: string;
  password: string;
  roles: "user" | "admin";
};

type FormAction = {
  type: "UPDATE_FORMDATA";
  payload: Partial<FormData>;
};

const initialState: FormData = {
  name: "",
  email: "",
  password: "",
  roles: "admin",
};

const formReducer = (state: FormData, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FORMDATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
function SignUp() {
  const router = useRouter();
  const [loading, setLOading] = useState(false);
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
      setLOading(true);

      const { data } = await axios.post("/api/auth/signup", formData);

      console.log("[DATA] :: ", data);
      if (data?.ok == false) {
        setLOading(false);
        toast.error("An error occurred");
      } else {
        setLOading(false);
        toast.success("Account created successfully", {
          className: "text-xs sm:text-sm",
        });
        router.push("/");
      }
    } catch (error) {
      setLOading(false);

      toast.error("An error occurred", { className: "text-sm" });
    }
  };
  return (
    <Container size={430} my={40}>
      <Title>Welcome Back</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <Group mt="md" justify="space-evenly">
            <Checkbox
              label="Admin"
              value={"admin"}
              name="roles"
              checked={formData.roles === "admin"}
              type="radio"
              onChange={() => {
                updateFormData({
                  type: "UPDATE_FORMDATA",
                  payload: {
                    roles: "admin",
                  },
                });
              }}
            />

            <Checkbox
              label="User"
              value={"user"}
              checked={formData.roles === "user"}
              type="radio"
              onChange={() => {
                updateFormData({
                  type: "UPDATE_FORMDATA",
                  payload: {
                    roles: "user",
                  },
                });
              }}
            />
          </Group>

          <TextInput
            label="First Name"
            name="name"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            required
            mt={"md"}
          />

          <TextInput
            label="Email"
            name="email"
            placeholder="yourEmail@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
            mt="md"
            name="password"
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
              SignUp
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

export default SignUp;
