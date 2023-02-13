import Header from "@/components/header";
import {
  Grid,
  GridItem,
  Link,
  Box,
  Heading,
  Text,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";

const NavbarLink = ({ href, inactive, children }: any) => {
  return (
    <Link href={href} pointerEvents={inactive ? "none" : "unset"}>
      <Box
        pt={2}
        pb={1}
        px={5}
        color={inactive ? "gray.500" : "unset"}
        backgroundColor={inactive ? "gray.700" : "unset"}
        _hover={inactive ? {} : { backgroundColor: "blue.900" }}
        borderRadius="md"
      >
        <Text fontWeight="bold">{children}</Text>
      </Box>
    </Link>
  );
};

const Navbar = () => {
  return (
    <>
      <Heading
        as="p"
        size="sm"
        textTransform="uppercase"
        color={"blue.300"}
        mt={4}
        mb={2}
      >
        Character Creation
      </Heading>
      <NavbarLink href="races">Races</NavbarLink>
      <NavbarLink href="basic-classes">Basic Classes</NavbarLink>
      <NavbarLink href="advanced-classes">Advanced Classes</NavbarLink>
      <Divider my={2} />

      <Heading
        as="p"
        size="sm"
        textTransform="uppercase"
        color={"blue.300"}
        mt={4}
        mb={2}
      >
        Gameplay
      </Heading>
      <NavbarLink href="danger-level">Danger Level</NavbarLink>
      <NavbarLink href="dice">Dice Rolls</NavbarLink>
      <NavbarLink href="resources">Resources</NavbarLink>
      <NavbarLink href="exhaustion-scars">Exhaustion and Scars</NavbarLink>
      <Divider my={2} />

      <Heading
        as="p"
        size="sm"
        textTransform="uppercase"
        color={"blue.300"}
        mt={4}
        mb={2}
      >
        World
      </Heading>
      <NavbarLink href="bestiary" inactive>
        Bestiary
      </NavbarLink>
    </>
  );
};

function MenuModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box textAlign="center">
      <IconButton
        className="mobile-menu-modal-button"
        onClick={onOpen}
        display={{ base: "inline", lg: "none" }}
        mt={4}
        pt={1}
        size="lg"
        colorScheme="blue"
        aria-label="Open Menu"
        icon={<GiHamburgerMenu />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Navbar />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const MainLayout = ({ children }: any) => {
  return (
    <Box w="80%" mx="auto">
      <Grid
        templateAreas={{
          base: `"header"
                "main"
                "footer"`,

          lg: `"header header"
                "nav main"
                "footer footer"`,
        }}
        gridTemplateColumns={{ base: "100%", lg: "250px 1fr" }}
        gap="1"
      >
        <GridItem pl="2" area={"header"}>
          <Header />
          <MenuModal />
        </GridItem>
        <GridItem
          pl="2"
          pr="5"
          area={"nav"}
          display={{ base: "none", lg: "block" }}
        >
          <Navbar />
        </GridItem>
        <GridItem px="5" area={"main"} maxW={{ base: "80vw", lg: "65vw" }}>
          {children}
        </GridItem>
        <GridItem pl="2" py={12} area={"footer"}>
          <Text textAlign="center">
            Hi, I am a footer, please don&apos;t mind me, Michael needs me to
            see if everything works as it should :)
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MainLayout;
