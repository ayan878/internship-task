import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Box, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    if (values.username === "user" && values.password === "pass") {
      localStorage.setItem("authenticated", true);
      navigate("/orders");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box width="300px" mx="auto" mt="100px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
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
