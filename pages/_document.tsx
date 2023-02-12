import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Box w="75%" mx="auto">
          <Main />
          <NextScript />
        </Box>
      </body>
    </Html>
  );
}
