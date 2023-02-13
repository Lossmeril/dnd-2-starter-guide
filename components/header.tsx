import Link from "next/link";
import { Heading, Box, Spacer, Divider, Stack, Icon } from "@chakra-ui/react";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";

const Header = () => {
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
          <Icon as={GiDiceTwentyFacesTwenty} h="100%" w="50px" />
        </Stack>
      </Box>
      <Divider />
    </>
  );
};

export default Header;
