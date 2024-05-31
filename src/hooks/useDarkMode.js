// src/hooks/useDarkMode.js
import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

export const useDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const savedMode = localStorage.getItem("chakra-ui-color-mode");
    if (savedMode && savedMode !== colorMode) {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", colorMode);
  }, [colorMode]);

  return { colorMode, toggleColorMode };
};
