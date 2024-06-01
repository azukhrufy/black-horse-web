import { Box, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box background="black" py={4} px={8}>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Text color="gray.50" fontWeight='semibold'>Black Horse FC - 2024</Text>
          <Text color="gray.200" fontSize='12px' fontWeight='semibold'>
            Bintang Sport Mini Soccer
          </Text>
          <Text color="gray.200" fontSize='12px'>
            Setiap Hari Sabtu, 7:00 - 8:00
          </Text>
          <Text color="gray.200" fontSize='12px'>
            Jl. Kebon Kopi, Cibeureum, Kec. Cimahi Sel., Kota Cimahi, Jawa Barat
            40535
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
