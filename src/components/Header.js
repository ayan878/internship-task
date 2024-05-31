
import { Button, Flex, Switch, Text } from "@chakra-ui/react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { colorMode, toggleColorMode } = useDarkMode();
  const { logout } = useAuth();

  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      bg="gray.700"
      color="white"
    >
      <Text fontSize="xl">Sale Order Management</Text>
      <Flex align="center">
        <Text mr={2}>Dark Mode</Text>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        <Button ml={4} onClick={logout}>
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
