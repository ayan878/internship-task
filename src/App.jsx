import { useColorMode, Button } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Orders from "./components/Orders";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Button
        onClick={toggleColorMode}
        position="absolute"
        top="1rem"
        right="1rem"
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
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
