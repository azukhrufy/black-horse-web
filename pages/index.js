import Head from "next/head";
import MainLayout from "@/layout/Main Layout";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { IoLogoWhatsapp } from "react-icons/io";

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Black Horse FC : Home</title>
      </Head>
      <Box position="relative">
        <Box overflow="hidden" position="relative">
          <Image src="/images/team-photo.png" alt="teamPhoto" />

          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="gray.200"
            fontSize="2xl"
          >
            <Flex flexDirection="column" gap={2} alignItems="center">
              <Heading as="h3" size={{ base: "md", lg: "xl" }}>
                Black Horse FC
              </Heading>
              {/* {!isMobile && ( */}
              <Heading as="h5" size={{ base: "sm", lg: "md" }}>
                Welcome to our Footballovers Community
              </Heading>
              {/* )} */}
            </Flex>
          </Box>
        </Box>

        <Box background="gray.200">
          <Container maxW="4xl" py={{ base: 4, lg: 12 }}>
            <Text
              fontSize={{ base: "12px", lg: "20px" }}
              textAlign="center"
              color="gray.600"
              className="quote"
            >
              <span style={{ fontSize: "20px" }}>" </span>
              Black Horse FC is more than just a football club, it's a community
              where fun and friendship come first. Whether you're an experienced
              player or new to the game, our club provides a welcoming
              environment for everyone to enjoy the beautiful game and make new
              friends.
              <span style={{ fontSize: "20px" }}> "</span>
            </Text>

            <Flex flexDirection="column" gap={2} alignItems="center" mt={6}>
              <Text fontWeight="bold" color="gray.600">
                Bobby Pratama - Founder
              </Text>
              <Box rounded="full" overflow="hidden" w="fit-content">
                <Image
                  src="/images/Person/bobby.jpeg"
                  alt="founder-speech"
                  w={{ base: "40px", lg: "60px" }}
                />
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box>
          <Container maxW="5xl" py={{ base: 4, lg: 12 }}>
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              gap={4}
            >
              <Box rounded="lg" overflow="hidden" w="fit-content">
                <Image alt="scene-1" src="/images/scene-1.png" w="100%" />
              </Box>
              <Box maxW="50%">
                <Heading as="h3" size="lg" textAlign="center" color="gray.600">
                  Our Vision
                </Heading>
                <Text
                  fontSize={{ base: "12px", lg: "20px" }}
                  textAlign="center"
                  color="gray.600"
                >
                  To be the best football club in Indonesia, known for our
                  sportsmanship, teamwork, and dedication to the beautiful game.
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box background="gray.200">
          <Container maxW="5xl" py={{ base: 4, lg: 12 }}>
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              gap={4}
            >
              <Box flexGrow={0} maxW="50%">
                <Heading as="h3" size="lg" textAlign="center" color="gray.600">
                  Our Mission
                </Heading>
                <Text
                  fontSize={{ base: "12px", lg: "20px" }}
                  textAlign="center"
                  color="gray.600"
                >
                  Our mission is to create an inclusive and supportive
                  atmosphere where players of all skill levels can come
                  together, play football, and build lasting connections.
                </Text>
              </Box>

              <Box rounded="lg" overflow="hidden" w="fit-content" flexGrow={1}>
                <Image alt="scene-2" src="/images/scene-2.png" w="100%" />
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box>
          <Container maxW="5xl" py={{ base: 4, lg: 12 }}>
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              gap={4}
            >
              <Box rounded="lg" overflow="hidden" w="fit-content">
                <Box position="relative">
                  <Image
                    alt="our-location"
                    src="/images/location.png"
                    w="100%"
                  />
                  <a
                    href="https://goo.gl/maps/Ax1ZHa4FqzgWhmxS8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
                      bg="rgba(0, 0, 0, 0.5)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      // color="gray.200"
                      fontSize="2xl"
                      cursor="pointer"
                    >
                      <Box
                        background="white"
                        rounded="lg"
                        border="1px solid grey"
                        px={4}
                        py={2}
                      >
                        <Text fontSize="sm">Open in Maps</Text>
                      </Box>
                    </Box>
                  </a>
                </Box>
              </Box>
              <Box maxW="50%">
                <Heading
                  as="h3"
                  size="lg"
                  textAlign="left"
                  color="gray.600"
                  px={4}
                >
                  Our Location
                </Heading>
                <Text
                  color="gray.600"
                  fontSize={{ base: "12px", lg: "20px" }}
                  fontWeight="semibold"
                  px={4}
                >
                  Bintang Sport Mini Soccer
                </Text>
                <Text
                  color="gray.500"
                  fontSize={{ base: "12px", lg: "20px" }}
                  px={4}
                >
                  Setiap Hari Sabtu, 7:00 - 8:00
                </Text>
                <Text
                  color="gray.500"
                  fontSize={{ base: "12px", lg: "20px" }}
                  px={4}
                >
                  Jl. Kebon Kopi, Cibeureum, Kec. Cimahi Sel., Kota Cimahi, Jawa
                  Barat 40535
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>
        <a
          href="https://wa.me/6287822405280"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            position="fixed"
            background="white"
            w="fit-content"
            bottom={8}
            right={2}
            rounded="lg"
            border="1px solid gray"
            px={{ base: 6, lg: 10 }}
            py={2}
          >
            <Flex flexDirection="row" gap={2} alignItems="center">
              <Icon
                as={IoLogoWhatsapp}
                color="green"
                fontSize={{ base: "14px", lg: "20px" }}
              />
              <Text fontSize={{ base: "14px", lg: "20px" }}>Join Us</Text>
            </Flex>
          </Box>
        </a>
      </Box>
    </>
  );
}
