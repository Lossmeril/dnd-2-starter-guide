import { Heading, Box, Spacer, Divider, Stack } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Box py={5}>
        <Stack
          spacing={{ base: 3, lg: 12 }}
          direction={{ base: "column", lg: "row" }}
        >
          <Link href="/">
            <Heading as="h1">Michael&apos;s D&D Starter Guide</Heading>
          </Link>
          <Spacer display={{ base: "none", lg: "unset" }} />
          <Link href="/characters">Characters</Link>
          <Link href="/stats">Stats and Equipment</Link>
          <Link href="/dice">Dice</Link>
        </Stack>
      </Box>
      <Divider />
    </>
  );
};

export default Navbar;
