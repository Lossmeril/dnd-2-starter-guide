import Head from "next/head";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Icon,
  Kbd,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import Navbar from "@/components/navbar";

import { Body, Charisma, Soul } from "@/components/styled/charLimits";
import {
  GiD10,
  GiD12,
  GiD4,
  GiDiceTwentyFacesTwenty,
  GiDiceEightFacesEight,
  GiPerspectiveDiceSix,
} from "react-icons/gi";

const Dice = () => {
  return (
    <>
      <Head>
        <title>D&D Starter Guide</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
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

        {/* <Text>
          In our verison of the game we will use mainly two types of die:{" "}
          <Kbd size="lg">D6</Kbd> and <Kbd>D20</Kbd>
        </Text> */}

        <Heading as="h2" size="lg" pt={8} pb={4} id="#danger">
          Danger Level
        </Heading>
        <Text>
          Thing that sound complicated but is actually very easy and a core
          mechanic is <strong>Danger Level</strong>.
        </Text>
        <Text>
          Danger Level is a numeric value representing the difficulty of the
          situation your character finds themselves. Higher the value, tougher
          the circumstances. Usually, the default value is 3.
        </Text>
        <TableContainer my={8}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Danger Level</Th>
                <Th>Difficulty</Th>
                <Th>
                  <Body>Body</Body> check example
                </Th>
                <Th>
                  <Soul>Soul</Soul> check example
                </Th>
                <Th>
                  <Charisma>Charisma</Charisma> check example
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Walk-in-a-park</Td>
                <Td>crossing a calm river outside a ford</Td>
                <Td>prying the latch on the hayloft door open</Td>
                <Td>entertaining children with a puppet show</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Same shit, new day</Td>
                <Td>crossing a wild mountain stream</Td>
                <Td>unlocking the door of the prison cell with a lockpick</Td>
                <Td>entertaining the villagers with adventure stories</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Better submit a risk assessment</Td>
                <Td>crossing a swollen river</Td>
                <Td>
                  overcoming several different locks on the merchant&apos;s
                  chest
                </Td>
                <Td>impressing a bored city folk</Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>The Danger is Real</Td>
                <Td>crossing a swollen river with floating debris and logs</Td>
                <Td>disarming the dart trap in the lock of the steel door</Td>
                <Td>
                  success with a court performance regardless of the gossip of
                  competitors
                </Td>
              </Tr>
              <Tr>
                <Td>5+</Td>
                <Td>THE FUCK DID I GET MYSELF INTO?</Td>
                <Td>
                  crossing a river with floating debris and logs in the middle
                  of a storm
                </Td>
                <Td>
                  deciphering the code on the door while the ceiling of the room
                  keeps falling
                </Td>
                <Td>
                  entertaining a decadent audience with a forbidden performance
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

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
    </>
  );
};

export default Dice;
