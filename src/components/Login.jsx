import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Box, Button, Input, FormControl, FormLabel, } from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    if (values.username === "user" && values.password === "pass") {
      toast.success("Login Successfully");
      localStorage.setItem("authenticated", true);
      navigate("/orders");
    } else if (values.username === "" || values.password === "") {
      toast.error("kindly enter the username and password");
    } else if (values.username !== "user" || values.password !== "pass") {
      toast.error("invalid credential");
    }
  };

  return (
    <Box width="300px" mx="auto" mt="100px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Toaster />
          <FormLabel>Username</FormLabel>
          <Input {...register("username")} />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("password")} />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
