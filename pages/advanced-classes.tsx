import { classes } from "@/data/classes";
import MainLayout from "@/layouts/layout";
import {
  Heading,
  Card,
  CardBody,
  Badge,
  Grid,
  GridItem,
  Center,
  Divider,
  UnorderedList,
  ListItem,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";

const AdvancedClassesPage = () => {
  return (
    <MainLayout>
      <Heading as="h2" size="lg" pt={8} pb={4}>
        Advanced Classes
      </Heading>
      <Text>
        When character gains a total of minimum 6 levels combined in two of the
        basic classes, their next level (7th) can be invested in an advanced
        class which stems from the previous two.
      </Text>
      <Card variant="filled" my={8}>
        <CardBody>
          <Heading as="h5" size="sm" pb={4}>
            Who can attempt what 2: Electric boogaloo?
          </Heading>
          <Text>
            If a skill for an advanced class is marked as{" "}
            <Badge colorScheme="blue">UNIQUE</Badge>, that skill can be only
            attempted by a character belonging to that class. (e.g. you really
            cannot cast a spell if you have no idea what the fuck is magic)
          </Text>
          <Text>
            Skills that are unmarked as unique can be attempted by anyone,
            although only characters belonging to said class can add a bonus to
            their throw.
          </Text>
        </CardBody>
      </Card>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        my={8}
      >
        {classes.map((advClass) => (
          <GridItem key={advClass.name} w="100%">
            <Card overflow="hidden" borderRadius="lg" h="100%">
              <Image
                objectFit="cover"
                src={"/static/classes/" + advClass.name.toLowerCase() + ".jpg"}
                alt={advClass.name}
                height="400px"
              />
              <CardBody>
                <Box>
                  <Heading as="h3" textAlign="center" size="lg">
                    {advClass.name}
                  </Heading>
                  <Center>
                    <Box mb={3} display="inline-block">
                      <Badge
                        ml="1"
                        fontSize="0.8em"
                        colorScheme={advClass.classA.colorScheme}
                      >
                        {advClass.classA.name}
                      </Badge>{" "}
                      +
                      <Badge
                        colorScheme={advClass.classB.colorScheme}
                        ml="1"
                        fontSize="0.8em"
                      >
                        {advClass.classB.name}
                      </Badge>
                    </Box>
                  </Center>
                  <Divider mb={3} />
                  <Text fontSize="sm" mb={3} textAlign="center">
                    {advClass.desc}
                  </Text>

                  <Heading as="h4" textAlign="center" size="sm" my={4}>
                    Class skills
                  </Heading>
                  <UnorderedList>
                    {advClass.skills?.map((skill) => (
                      <>
                        <ListItem key={0} fontSize="sm" fontWeight="bold">
                          {skill}
                        </ListItem>
                        <Divider my={2} />
                      </>
                    ))}
                  </UnorderedList>
                </Box>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default AdvancedClassesPage;
