import { Flex, HStack, Link } from "@chakra-ui/react";
import { InstaIcon, LinkedinIcon, TwitterIcon, YTIcon } from "../assets/Icons";
import Logo from "../assets/Logo";
import ThemeSwitcher from "./ThemeSwitcher";

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
      <Logo
        me={[0, null, null, "180px"]}
        mb={["48px", null, null, 0]}
        fill="svg"
      />
      <ThemeSwitcher
        display={["flex", null, null, "none"]}
        pos="absolute"
        top="60px"
        right={["15vw", "32vw", null, null]}
      />
      <HStack spacing="48px">
        <Link href="https://www.instagram.com/daprmedia/" target="_blank">
          <InstaIcon
            fill="svg"
            width="22px"
            height="22px"
            transition="fill .5s"
            _hover={{ fill: "url(#a)" }}
          />
        </Link>

        <Link href="https://twitter.com/DaprMedia" target="_blank">
          <TwitterIcon
            fill="svg"
            width="22px"
            height="22px"
            _hover={{ fill: "#00ACEE" }}
          />
        </Link>

        <Link
          href="https://www.youtube.com/channel/UC1oOOUHWZKtWwPmQllIMt3g"
          target="_blank"
        >
          <YTIcon
            fill="svg"
            width="22px"
            height="22px"
            _hover={{ fill: "#FF0000" }}
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/dapr-media-a44762232/"
          target="_blank"
        >
          <LinkedinIcon
            fill="svg"
            width="22px"
            height="22px"
            _hover={{ fill: "#0E76A8" }}
          />
        </Link>
      </HStack>
    </Flex>
  );
}
