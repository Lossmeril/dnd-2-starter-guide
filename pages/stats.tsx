import Head from "next/head";
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import Navbar from "@/components/navbar";

import { Body, Charisma, Resource, Soul } from "@/components/styled/charLimits";
import { GiBiceps, GiSheikahEye, GiDramaMasks } from "react-icons/gi";

const Stats = () => {
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
          Character Resources
        </Heading>
        <Text>
          You may have heard about D&D characters having stats such as{" "}
          <strong>Strength</strong>, <strong>Dexterity</strong> and{" "}
          <strong>Wisdom</strong>.
        </Text>
        <Text>Well, guess what?</Text>
        <Image
          src="/static/we-dont-do-that-here.gif"
          alt="We don't do that here"
          height="180px"
          my={4}
        />

        <Text>
          Our version of D&D does not need to compensate for something and every
          character needs only three stats: <Body>Body</Body>, <Soul>Soul</Soul>{" "}
          and <Charisma>Charisma</Charisma>.
        </Text>

        <TableContainer my={8}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Represents</Th>
                <Th>Examples of activities</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Icon as={GiBiceps} w="50px" h="50px" color="palevioletred" />
                  <Heading as="h4" size="sm">
                    Body
                  </Heading>
                </Td>
                <Td>Character&apos;s bodily limits and reflexes</Td>
                <Td>
                  Lifting a boulder, chasing a running enemy, fencing, drawing a
                  bow, acrobatics, sleight-of-hand
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Icon
                    as={GiSheikahEye}
                    w="50px"
                    h="50px"
                    color="mediumslateblue"
                  />
                  <Heading as="h4" size="sm">
                    Soul
                  </Heading>
                </Td>
                <Td>Character&apos;s mental capabilities and focus</Td>
                <Td>
                  Speaking a foreign tongue, reading, orientation, cheating in
                  cards, practicing spells, unlocking locks, alchemy
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Icon as={GiDramaMasks} w="50px" h="50px" color="goldenrod" />
                  <Heading as="h4" size="sm">
                    Charisma
                  </Heading>
                </Td>
                <Td>Character&apos;s ability to interact with others</Td>
                <Td>
                  Intimidation, haggling, seducing, taming a wild animal,
                  manipulation, distracting
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Text>
          It is also important not to think of these as some ultimate resources,
          or health points! These are mere limits that your character has at
          their disposition. Feel free to use them, you can replenish them
          later.
        </Text>
        <Text>
          If your character has for example 8 <Body>Body</Body> points and uses
          all of them, it does not mean they drop dead where they stand. It only
          means it has reached the limit of their bodily strength and will no
          longer be able to push their performances further.
        </Text>
        <Text>
          However, they will be still able to do anything they wish to do
          normally, as long as they roll successfully. They will be also able to
          avert bad outcomes, albeit for a certain price. More on managing
          resources in later paragraphs.
        </Text>

        <Heading as="h3" size="md" pt={8} pb={4}>
          Managing Resources
        </Heading>
        <Text>
          It is not uncommon for your character to fail a check roll. If that
          happens, your character either accepts the failure or averts the bad
          outcome. In order to avert bad outcome, they have to spend their
          resources.
        </Text>
        <Text>
          The resources spent have to be of the same stat as the check (e.g.
          failing a check while climbing a hill (physical activity) will result
          in <Body>Body</Body> points being sacrificed).
        </Text>
        <Text>
          The amount of points spent equals to the <strong>Danger Level</strong>{" "}
          of the situation.
        </Text>

        <Heading as="h4" size="sm" pt={8} pb={4}>
          Tiring Character
        </Heading>
        <Text>
          When a character <strong>tire</strong> themselves, they spent a
          certain amount of points. This means exactly what the title suggests -
          a character makes an extra effort by bitting their tongue which
          results in them pushing their limits and tiring themselves in the
          process.
        </Text>
        <Text>
          <strong>Tired</strong> resource is marked by single strikethrough mark
          and they replenish everytime your character sleeps.
        </Text>
        <Card variant="filled" my={8}>
          <CardBody>
            <Heading as="h5" size="sm" pb={4}>
              Example:
            </Heading>
            <Text>
              Michal failed a <Charisma>Charisma</Charisma> check to flirt with
              the burgmaster&apos;s daughter like the fucking failure he is.
              However, his team relies on the her affection later that day, so
              Michal desices to <strong>tire</strong> himself. As this was
              moderately difficult situation, the <strong>Danger Level</strong>{" "}
              was 3.
            </Text>
            <Text>
              Michal spends 3 <Charisma>Charisma</Charisma> resources and averts
              failure by turning unsucesfull courting into a joke based on
              stereotype of a city bad boys, which amuses the target. Even
              though the flirting succeeded in the end, Michal knows he was
              painfully close to embarassing himself and this knowledge haunts
              him for the rest of the afternoon (his{" "}
              <Charisma>Charisma</Charisma> is tired).
            </Text>
            <HStack my={5}>
              <Icon as={GiDramaMasks} w="50px" h="50px" color="goldenrod" />
              <Resource> </Resource>
              <Resource> </Resource>
              <Resource> </Resource>
              <Resource>/</Resource>
              <Resource>/</Resource>
              <Resource>/</Resource>
            </HStack>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default Stats;
