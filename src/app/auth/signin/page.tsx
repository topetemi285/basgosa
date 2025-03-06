// "use client";
// import {
//   Button,
//   Checkbox,
//   Container,
//   Group,
//   Paper,
//   PasswordInput,
//   TextInput,
//   Title,
// } from "@mantine/core";
// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useReducer, useState } from "react";
// import { toast } from "react-hot-toast";

// type FormData = {
//   email: string;
//   password: string;
// };

// type FormAction = {
//   type: "UPDATE_FORMDATA";
//   payload: Partial<FormData>;
// };

// const initialState: FormData = {
//   email: "",
//   password: "",
// };

// const formReducer = (state: FormData, action: FormAction) => {
//   switch (action.type) {
//     case "UPDATE_FORMDATA":
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };

// function SignInPage() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const [formData, updateFormData] = useReducer(formReducer, initialState);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     updateFormData({
//       type: "UPDATE_FORMDATA",
//       payload: { [event.target.name]: event.target.value },
//     });
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       setLoading(true);

//       const { data } = await axios.post("/api/auth/signup", formData);

//       if (data?.ok == false) {
//         setLoading(false);
//         toast.error("Invalid Credentials");
//       }
//       toast.success("Success");

//       return router.push("/");
//     } catch (error) {
//       setLoading(false);
//       toast.error("Invalid credentials");
//     }
//   };

//   return (
//     <Container size={430} my={40}>
//       <Title>LOGIN </Title>

//       <Paper withBorder shadow="md" p={30} mt={30} radius="md">
//         <form onSubmit={handleSubmit}>
//           <TextInput
//             label="Email"
//             name="email"
//             placeholder="yourEmail@gmail.com"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <PasswordInput
//             label="Password"
//             placeholder="Your Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             mt="md"
//             name="password"
//           />
//           <Group mt="md" justify="space-evenly">
//             <Checkbox label="Remember Me" />
//             <Button variant="subtle" size="xs">
//               Forget Password?
//             </Button>
//           </Group>

//           {loading ? (
//             <Button
//               type="button"
//               className="bg-green-700 text-white h-12 hover:bg-green-700 w-full rounded-full py-3 cursor-default"
//             >
//               loading...
//             </Button>
//           ) : (
//             <Button fullWidth mt="xl" type="submit">
//               LogIn
//             </Button>
//           )}
//         </form>
//         <div className="flex justify-center mt-5">
//           <Link href="/signup" className="text-sm text-center mx-auto">
//             Don't have an account?{" "}
//             <span className="text-green-500">Register</span>
//           </Link>
//         </div>
//       </Paper>
//     </Container>
//   );
// }

// export default SignInPage;

"use client";

import {
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useReducer, useState } from "react";
// import { toast } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  email: string;
  password: string;
};

type FormAction = {
  type: "UPDATE_FORMDATA";
  payload: Partial<FormData>;
};

const initialState: FormData = {
  email: "",
  password: "",
};

const formReducer = (state: FormData, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FORMDATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

function SignInPage() {
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
      const { data } = await axios.post("/api/auth/signin", formData, {
        withCredentials: true, // Ensure cookies are sent & stored
      });
      console.log("[DATA] :: ", data);

      if (data?.ok == false) {
        setLoading(false);
        toast.error("Invalid Credentials");
      } else {
        setLoading(false);
        toast.success("Login Successfully", {
          className: "text-xs sm:text-sm",
        });
        router.push("/");
      }
    } catch (error) {
      toast.error("Invalid credentials");
      console.error("[LOGIN ERROR]:", error);
    }
  };

  return (
    <Container size={430} my={40}>
      <Title>LOGIN</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
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

          <Group mt="md" justify="space-evenly">
            <Checkbox label="Remember Me" />
            <Button variant="subtle" size="xs">
              <Link href={"/auth/forgot-password"}>Forget Password?</Link>
            </Button>
          </Group>

          <Button fullWidth mt="xl" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Log In"}
          </Button>
        </form>

        <div className="flex justify-center mt-5">
          <Link href="signup" className="text-sm text-center mx-auto">
            Dont have an account?{" "}
            <span className="text-green-500">Register</span>
          </Link>
        </div>
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

export default SignInPage;
