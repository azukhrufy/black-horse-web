import BHPopover from "@/components/BHPopover";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";

export default function TopNavbar() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Box mb={2} boxShadow="lg">
      <Flex
        flexDirection="row"
        background="white"
        py={4}
        px={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex flexDirection="row" gap={{ base: 2, lg: 4 }} alignItems="center">
          <Image
            src="/images/blackhorse-logo.jpeg"
            alt="Logo"
            h={{ base: "40px", lg: "60px" }}
          />
          <Divider orientation="vertical" w="8px" h="50px" />
          {!isMobile && (
            <Heading as="h2" size="md">
              Black Horse Football Club{" "}
            </Heading>
          )}
        </Flex>

        {isMobile && (
          <BHPopover
            content={() => {
              return (
                <Flex flexDirection="column" gap={2}>
                  <Button
                    justifyContent="flex-start"
                    size="sm"
                    variant="ghost"
                    colorScheme="gray"
                  >
                    Home
                  </Button>
                  <Button
                    justifyContent="flex-start"
                    size="sm"
                    variant="ghost"
                    colorScheme="gray"
                  >
                    Sejarah
                  </Button>
                  <Button
                    justifyContent="flex-start"
                    size="sm"
                    variant="ghost"
                    colorScheme="gray"
                  >
                    Minat Bergabung
                  </Button>
                </Flex>
              );
            }}
          >
            <IconButton icon={<Icon as={IoMdMenu} />} />
          </BHPopover>
        )}

        {!isMobile && (
          <Flex gap={4}>
            <Button
              justifyContent="flex-start"
              // size="sm"
              variant="ghost"
              colorScheme="gray"
            >
              Home
            </Button>
            <Button
              justifyContent="flex-start"
              // size="sm"
              variant="ghost"
              colorScheme="gray"
            >
              Sejarah
            </Button>
            <Button
              justifyContent="flex-start"
              // size="sm"
              variant="ghost"
              colorScheme="gray"
            >
              Minat Bergabung
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
