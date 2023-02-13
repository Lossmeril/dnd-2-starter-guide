import { basicClasses } from "@/data/classes";
import MainLayout from "@/layouts/layout";
import {
  Heading,
  Card,
  CardBody,
  Grid,
  GridItem,
  Divider,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

const BasicClassesPage = () => {
  return (
    <MainLayout>
      <Heading as="h2" size="lg" pt={8} pb={4}>
        Basic classes
      </Heading>
      <Text>
        Next in order is to select a class for your character. In this version
        we do have <strong>5 basic</strong> classes which then branch into{" "}
        <strong>10 advanced</strong>.
      </Text>
      <Text>
        What class is is a numeric representation of your character&apos;s
        skills and abilities in certain field. Class DOES NOT equal a profession
        or occupation. You can have a bard who is a warrior, or a bard who is a
        shaman.
      </Text>
      <Text>
        If your character undergoes a skill check in an action that corresponds
        with one of your classes, you{" "}
        <strong>add the classes&apos; level to your roll</strong> as a bonus.
      </Text>
      <Card variant="filled" my={8}>
        <CardBody>
          <Heading as="h5" size="sm" pb={4}>
            Who can attempt what?
          </Heading>
          <Text>
            Skills that belong to one of the basic classes can be attempted by
            anyone, although only characters belonging to said class can add a
            bonus to their throw.
          </Text>
        </CardBody>
      </Card>
      <Text>Classes&apos; level can be somewhere between 1 and 5.</Text>
      <Card variant="filled" my={8}>
        <CardBody>
          <Heading as="h5" size="sm" pb={4}>
            Example:
          </Heading>
          <Text>
            Michal wants to get some money in a tavern by singing a song. He
            rolls a skill check and rolls <strong>6</strong> which is not enough
            by itself to succeed. However, Michal is a{" "}
            <strong>level 4 juggler</strong>, meaning he cann{" "}
            <strong>add 4 to his roll</strong>, making his{" "}
            <strong>total 10</strong>. This makes him succeed in his action
            without having to exhaust himself.
          </Text>
        </CardBody>
      </Card>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6}
        my={8}
      >
        {basicClasses.map((basciClass) => (
          <GridItem key={basciClass.name} w="100%">
            <Card overflow="hidden" borderRadius="lg" h="100%">
              <Image
                objectFit="cover"
                src={
                  "/static/classes/" + basciClass.name.toLowerCase() + ".jpg"
                }
                alt={basciClass.name}
                height="400px"
              />
              <CardBody>
                <Box>
                  <Heading as="h3" textAlign="center" mb={3} size="lg">
                    {basciClass.name}
                  </Heading>
                  <Divider mb={3} />
                </Box>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default BasicClassesPage;
