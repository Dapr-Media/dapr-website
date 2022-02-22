import { Flex, HStack, Link } from "@chakra-ui/react";
import InstaIcon from "../assets/InstaIcon";
import LinkedinIcon from "../assets/LinkedinIcon";
import Logo from "../assets/Logo";
import TwitterIcon from "../assets/TwitterIcon";
import YTIcon from "../assets/YTIcon";

export default function NavBar() {
  return (
    <Flex
      justify="space-between"
      align="center"
      shadow="0px 0px 16px rgba(0, 0, 0, 0.04)"
      border="2px solid #ff3333"
      rounded="24"
      py="25px"
      px="40px"
      flexDir={["column", null, null, "row"]}
      maxW="min-content"
      mx="auto"
    >
      <Logo me={[0, null, null, "180px"]} mb={["48px", null, null, 0]} />
      <HStack spacing="48px">
        <Link href="https://www.instagram.com/daprmedia/" target="_blank">
          <InstaIcon />
        </Link>

        <Link href="https://twitter.com/DaprMedia" target="_blank">
          <TwitterIcon />
        </Link>

        <Link
          href="https://www.youtube.com/channel/UC1oOOUHWZKtWwPmQllIMt3g"
          target="_blank"
        >
          <YTIcon />
        </Link>

        <Link
          href="https://www.linkedin.com/in/dapr-media-a44762232/"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
      </HStack>
    </Flex>
  );
}
