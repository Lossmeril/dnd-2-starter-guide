import { categories } from "@/data/bestiary";
import MainLayout from "@/layouts/layout";
import {
  Grid,
  GridItem,
  Card,
  CardBody,
  Heading,
  Divider,
  Text,
  Image,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const BestiaryPage = () => {
  return (
    <MainLayout>
      {categories.map((category) => (
        <>
          <Heading as="h2" size="lg" key={category.name} pt={8} pb={4}>
            {category.name}
          </Heading>
          <Text>{category.tagline}</Text>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            my={8}
          >
            {category.subcats?.map((subcat) => (
              <GridItem key={subcat.name} w="100%">
                <Card overflow="hidden" borderRadius="lg" h="100%">
                  <Image
                    objectFit="cover"
                    src={
                      "/static/bestiary/" + subcat.name.toLowerCase() + ".jpg"
                    }
                    alt={subcat.name}
                    height="400px"
                  />
                  <CardBody>
                    <Box>
                      <Heading as="h3" textAlign="center" mb={3} size="lg">
                        {subcat.name}
                      </Heading>
                      <Divider mb={3} />
                      <Text fontSize="sm" mb={3} textAlign="center">
                        {subcat.desc}
                      </Text>
                      <Heading as="h4" textAlign="center" mb={3} size="sm">
                        Examples:
                      </Heading>
                      <UnorderedList>
                        {subcat.examples.map((monster) => (
                          <ListItem key={monster} fontSize="sm">
                            {monster}
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </Box>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
          <Divider />
        </>
      ))}
    </MainLayout>
  );
};

export default BestiaryPage;
