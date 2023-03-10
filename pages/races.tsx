import races from "@/data/races";
import MainLayout from "@/layouts/layout";
import {
  Box,
  Card,
  CardBody,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const RacesPage = () => {
  return (
    <MainLayout>
      <Heading as="h2" size="lg" pt={8} pb={4}>
        Races
      </Heading>
      <Text>
        The creation of a character starts at picking their race. There are five
        basic races: <strong>Humans</strong>, <strong>Elves</strong>,{" "}
        <strong>Dwarves</strong>, <strong>Halflings</strong> (or Hobbits) and{" "}
        <strong>Krolls</strong> (who are an unique race to this D&D system).
      </Text>
      <Text>
        The race has no bigger impact on the gameplay besides one racial special
        skill that your character will gain. However, it has big implications
        for your character&apos;s backstory and how other people will react to
        them. But in the end, just have fun with what you want to play.
      </Text>
      <Card variant="filled" my={8}>
        <CardBody>
          <Heading as="h5" size="sm" pb={4}>
            Frequently asked questions:
          </Heading>
          <Text>
            <strong>Can I play a fairy?</strong>
            <br />
            Well, no, but actually yes. I will not accept a fairy race as those
            are a domain of high fantasy, while I like to keep things more
            gritty. But why not play a elf druid who comes from an ancient and
            nature-connected family? To-may-to / To-mah-to.
          </Text>
          <Text>
            <strong>Can I play a vampire?</strong>
            <br />
            No, Gareth.
          </Text>
          <Text>
            <strong>Can I play a ghost?</strong>
            <br />
            No, Gareth.
          </Text>
          <Text>
            <strong>Why?</strong>
            <br />
            While technically possible, I am not making a new ruleset just for
            you just so you can get a stake driven through your heart by first
            village boy that comes around.
          </Text>
          <Text>
            <strong>But I thought I could be anything... :(</strong>
            <br />
            ...
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
        {races.map((race) => (
          <GridItem key={race.name} w="100%">
            <Card overflow="hidden" borderRadius="lg" h="100%">
              <Image
                objectFit="cover"
                src={"/static/races/" + race.name.toLowerCase() + ".jpg"}
                alt={race.name}
                height="400px"
              />
              <CardBody>
                <Box>
                  <Heading as="h3" textAlign="center" mb={3} size="lg">
                    {race.name}
                  </Heading>
                  <Divider mb={3} />
                  <Text fontSize="sm" mb={3} textAlign="center">
                    {race.tagline}
                  </Text>
                </Box>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default RacesPage;
