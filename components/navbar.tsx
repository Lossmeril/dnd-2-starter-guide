import { Heading, Box, HStack, Spacer, Divider } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Box py={5}>
        <HStack spacing={12}>
          <Link href="/">
            <Heading as="h1">Michael&apos;s D&D Starter Guide</Heading>
          </Link>
          <Spacer />
          <Link href="/characters">Characters</Link>
          <Link href="/stats">Stats and Equipment</Link>
          <Link href="/dice">Dice</Link>
        </HStack>
      </Box>
      <Divider />
    </>
  );
};

export default Navbar;
