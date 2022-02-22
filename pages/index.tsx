import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import "@fontsource/inter/800.css";
import type { NextPage } from "next";
import DottedWeb from "../assets/DottedWeb";

const Home: NextPage = () => {
  return (
    <>
      <VStack spacing={["48px", null, null, "56px"]}>
        <Text mt={["48px", null, null, "56px"]}>THANKS FOR VISITING US!</Text>
        <DottedWeb width={["220px", "300px", null, "400px"]} />
        <Text>
          We are currently revamping our website.
          <br /> It will be back soon.
        </Text>
        <Text>
          Have any project inquiry?
          <br />
          E-Mail us at: &nbsp;
          <Link color="daprRed" href="mailto:contact@daprmedia.com">
            contact@daprmedia.com
          </Link>
        </Text>
      </VStack>
    </>
  );
};

export default Home;
