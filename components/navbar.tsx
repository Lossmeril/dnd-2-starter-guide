import { Heading, Box, HStack } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box>
      <Heading as="h1">Michael&apos;s D&D Starter Guide</Heading>
      <HStack>
        <Link href="/characters">Characters</Link>
        <Link href="/stats">Stats and Equipment</Link>
        <Link href="/dice">Dice</Link>
      </HStack>
    </Box>
  );
};

export default Navbar;
