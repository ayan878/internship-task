import { Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import LoremIpsum from "react-lorem-ipsum";

function App() {

  return (
    <div>
      <Heading>Hi! I'm ChakraUI</Heading>
      <Text><LoremIpsum p={1}/>
      </Text>
      
    </div>
  );
}
export default App;
