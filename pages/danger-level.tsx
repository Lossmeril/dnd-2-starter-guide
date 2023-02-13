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
  Text,
} from "@chakra-ui/react";

import Link from "next/link";

const DangerLevelPage = () => {
  return (
    <MainLayout>
      <Heading as="h2" size="lg" pt={8} pb={4} id="#danger">
        Danger Level
      </Heading>
      <Text>
        Thing that sound complicated but is actually very easy and a core
        mechanic is <strong>Danger Level</strong>.
      </Text>
      <Text>
        Danger Level is a numeric value representing the difficulty of the
        situation your character finds themselves. Higher the value, tougher the
        circumstances. Usually, the default value is 3.
      </Text>
      <Text>
        Whenever your character wants to avoid bad outcome, it will spend the
        amount of resources equal to current danger level. More on{" "}
        <Link href="exhaustion-scars">
          <CrossLink>Exhaustion and Scars &rsaquo;</CrossLink>
        </Link>
      </Text>
      <TableContainer my={8} pb={4}>
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
                overcoming several different locks on the merchant&apos;s chest
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
                crossing a river with floating debris and logs in the middle of
                a storm
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
    </MainLayout>
  );
};

export default DangerLevelPage;
