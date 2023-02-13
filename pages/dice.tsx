import MainLayout from "@/layouts/layout";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Icon,
  Kbd,
  Text,
} from "@chakra-ui/react";

import {
  GiD10,
  GiD12,
  GiD4,
  GiDiceTwentyFacesTwenty,
  GiDiceEightFacesEight,
  GiPerspectiveDiceSix,
} from "react-icons/gi";

const DiceRollsPage = () => {
  return (
    <MainLayout>
      <Box as="main">
        <Heading as="h2" size="lg" pt={8} pb={4}>
          Dice Rolls
        </Heading>
        <Text>
          Dice rolls are THE method of determining what will happen in-game and
          add an element of randomness to the gameplay. You will be asked to
          roll a die everytime your character decides to do something or
          participates in an action whose success is not automatic.
        </Text>

        <Heading as="h3" size="md" pt={8} pb={4}>
          Types of dice
        </Heading>
        <Text>There are usually 6 types of dice in tabletop RPGs:</Text>
        <Grid templateColumns="repeat(6, 1fr)" my={6}>
          <GridItem>
            <Icon as={GiD4} w="100px" h="100px" />
            <Heading as="h4" size="sm">
              d4
            </Heading>
          </GridItem>
          <GridItem>
            <Icon as={GiPerspectiveDiceSix} w="100px" h="100px" />
            <Heading as="h4" size="sm">
              d6
            </Heading>
          </GridItem>
          <GridItem>
            <Icon as={GiDiceEightFacesEight} w="100px" h="100px" />
            <Heading as="h4" size="sm">
              d8
            </Heading>
          </GridItem>
          <GridItem>
            <Icon as={GiD10} w="100px" h="100px" />
            <Heading as="h4" size="sm">
              d10
            </Heading>
          </GridItem>
          <GridItem>
            <Icon as={GiD12} w="100px" h="100px" />
            <Heading as="h4" size="sm">
              d12
            </Heading>
          </GridItem>
          <GridItem>
            <Icon as={GiDiceTwentyFacesTwenty} w="100px" h="100px" />
            <Heading as="h4" size="sm">
              d20
            </Heading>
          </GridItem>
        </Grid>

        <Text>
          In our verison of the game we will use mainly two types of die:{" "}
          <Kbd size="lg">D6</Kbd> and <Kbd>D20</Kbd>
        </Text>

        <Heading as="h2" size="lg" pt={8} pb={4}>
          Types of rolls
        </Heading>
        <Heading as="h3" size="md" pt={8} pb={4}>
          Skill Check (Character vs. Environment)
        </Heading>

        <Heading as="h3" size="md" pt={8} pb={4}>
          Skill Check (Character vs. Character)
        </Heading>
      </Box>
    </MainLayout>
  );
};

export default DiceRollsPage;
