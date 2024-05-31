import { Toast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const navigate=useNavigate()
  
  const login = (username, password) => {
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/")
    } else {
      Toast({
        title: "Invalid credentials",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/login")
    localStorage.removeItem("isAuthenticated");
  };

  return { isAuthenticated, login, logout };
};
