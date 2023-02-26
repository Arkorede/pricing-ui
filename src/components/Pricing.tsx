import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  StackProps,
  Text,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icon";
// import checkicon from "../icons/checkicon.png";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="5" {...rest} alignItems="start">
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

export function Pricing() {
  return (
    <Box mx="6">
      <Box
        as="section"
        maxW="994px"
        margin="auto"
        mt="-64"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="gray.50" p="60px">
            <Text fontSize="xl" fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl", "5xl", "6xl"]} mt="4">
              $329
            </Heading>
            <Text color="gray.900" fontSize="lg" fontWeight="medium" mt="2">
              Billed just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="6">
              Get started
            </Button>
          </Box>
          <Box p="15" fontSize="lg" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
