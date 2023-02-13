import MainLayout from "@/layouts/layout";
import {
  Heading,
  Card,
  CardBody,
  HStack,
  Icon,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";

import { Charisma, Resource } from "@/components/styled/charLimits";
import { GiDramaMasks, GiBiceps, GiSheikahEye } from "react-icons/gi";
import Link from "next/link";
import { CrossLink } from "@/components/styled/general";

const ExhaustionsAndScarsPage = () => {
  return (
    <MainLayout>
      <Heading as="h2" size="lg" pt={8} pb={4}>
        Exhaustion
      </Heading>
      <Text>
        When a character <strong>exhaust</strong> themselves, they spent a
        certain amount of points. This means exactly what the title suggests - a
        character makes an extra effort by bitting their tongue which results in
        them pushing their limits and tiring themselves in the process.
      </Text>
      <Text>
        The amount of points your character needs to spend is equal to their
        current{" "}
        <Link href="danger-level">
          <CrossLink>Danger Level &rsaquo;</CrossLink>
        </Link>
      </Text>
      <Text>
        <strong>Exhausted</strong> resource is marked by single strikethrough
        mark and they replenishes everytime your character sleeps.
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
            Michal desices to <strong>exhaust</strong> himself. As this was
            moderately difficult situation, the <strong>Danger Level</strong>{" "}
            was 3.
          </Text>
          <Text>
            Michal spends 3 <Charisma>Charisma</Charisma> resources and averts
            failure by turning unsucesfull courting into a joke based on
            stereotype of a city bad boys, which amuses the target. Even though
            the flirting succeeded in the end, Michal knows he was painfully
            close to embarassing himself and this knowledge haunts him for the
            rest of the afternoon (his <Charisma>Charisma</Charisma> is
            exhausted).
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

      <Heading as="h2" size="lg" pt={8} pb={4}>
        Scars
      </Heading>
      <Text>
        When a character does not have enough resources to spend and still wants
        to avoid the bad outcome, it can deal themselves a <strong>scar</strong>
        . A dealing a scar gives the character <strong>two more</strong>
        additional points to spend.
      </Text>
      <Text>
        A scar is semi-permanent damage to your character&apos;s resources. It
        is represented by crossing-out a resource field and it{" "}
        <strong>does not replenish by sleeping</strong>. In order to heal a
        scar, a character needs to spend time healing it either themselves or
        with help from another character.
      </Text>
      <Text>
        A scar is represented my a more permanent damage to your character.
        Examples of scars can be:
      </Text>
      <TableContainer my={8} pb={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Examples of scars</Th>
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
              <Td>
                Bleeding wound, illness, sprained ankle, bruise, shaking,
                sensory loss
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
              <Td>
                Headache, depression, anxiety, insomnia, lack of motivation,
                nightmares, guilt
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Icon as={GiDramaMasks} w="50px" h="50px" color="goldenrod" />
                <Heading as="h4" size="sm">
                  Charisma
                </Heading>
              </Td>
              <Td>
                Loss of honour, being mocked, gossips, being target of hate,
                distrust, being outlawed
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Card variant="filled" my={8}>
        <CardBody>
          <Heading as="h5" size="sm" pb={4}>
            Example:
          </Heading>
          <Text>
            Michal failed a <Charisma>Charisma</Charisma> check again to flirt
            with the burgmaster&apos;s daughter as he is really bad at his game.
            He wants to exhaust himself, but does not have enough{" "}
            <Charisma>Charisma</Charisma> points - he has only{" "}
            <strong>1 left</strong>, while the{" "}
            <strong>danger level is 3</strong>.
          </Text>
          <Text>
            However, his team relies once more on the her affection later that
            day, so Michal desices to{" "}
            <strong>
              give himself a <Charisma>Charisma</Charisma> scar
            </strong>{" "}
            whcih grants him <strong>2 more points to spend</strong>.
          </Text>
          <Text>
            Michal spends the last <Charisma>Charisma</Charisma> resource and
            crosses-out one of them which averts failure. However, he is seen
            flirting with a respected unmarried lady by burgmaster&apos;s men.
            This ruins his reputation with the burgmaster and he is searched for
            by the town guards. (his <Charisma>Charisma</Charisma> is scarred).
          </Text>
          <HStack my={5}>
            <Icon as={GiDramaMasks} w="50px" h="50px" color="goldenrod" />
            <Resource>/</Resource>
            <Resource>/</Resource>
            <Resource>/</Resource>
            <Resource>/</Resource>
            <Resource>/</Resource>
            <Resource>X</Resource>
          </HStack>
          <Text>
            In order to mend his scar, Michal will probably have to pay for
            burgmaster&apos;s drink and profuesly apologise. He will have to
            spend some monetary and <Charisma>Charisma</Charisma> resources to
            get rid off the scar before he can unblock the crossed-out token.
          </Text>
        </CardBody>
      </Card>
    </MainLayout>
  );
};

export default ExhaustionsAndScarsPage;
