// // src/pages/LoginPage.js
// import { useState } from "react";
// import { Box, Button, Input, VStack } from "@chakra-ui/react";
// import { useAuth } from "../context/AuthContext";

// const LoginPage = () => {
//   const { login } = useAuth();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = () => {
//     login(username, password);
//   };

//   return (
//     <VStack spacing={4}>
//       <Box>
//         <Input
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </Box>
//       <Box>
//         <Input
//           placeholder="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Box>
//       <Button onClick={handleSubmit}>Login</Button>
//     </VStack>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Input,
  Stack,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";

//  import { useAuth } from "../context/AuthContext";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/");
    } else {
      toast({
        title: "Invalid credentials",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container marginTop={16}>
      <Box p={4} maxW="md" borderWidth={1} borderRadius="md">
        <Heading mb={4}>Login</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" colorScheme="blue">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
