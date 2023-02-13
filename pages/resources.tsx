import { Body, Soul, Charisma } from "@/components/styled/charLimits";
import { CrossLink } from "@/components/styled/general";
import MainLayout from "@/layouts/layout";
import {
  Heading,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Icon,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { GiBiceps, GiSheikahEye, GiDramaMasks } from "react-icons/gi";

const ResourcesPage = () => {
  return (
    <MainLayout>
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
      <TableContainer my={8} pb={4}>
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
        or health points! These are mere limits that your character has at their
        disposition. Feel free to use them, you can replenish them later.
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
        resources on{" "}
        <Link href="exhaustion-scars">
          <CrossLink>Exhaustion and Scars &rsaquo;</CrossLink>
        </Link>
        .
      </Text>
    </MainLayout>
  );
};

export default ResourcesPage;
