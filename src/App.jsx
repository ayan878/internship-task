import { useColorMode, Button } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Orders from "./components/Orders";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Button
        onClick={toggleColorMode}
        position="relative"
        cursor="pointer"
        top="1rem"
        left="20rem"
      >
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Button>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/orders/*" element={<Orders />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
