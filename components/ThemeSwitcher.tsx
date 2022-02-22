import { Box, chakra, Flex, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SunIcon } from "../assets/Icons";

const MotionBox = chakra(motion.div);

const variants = {
  light: { x: 0 },
  dark: { x: 100 },
};

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOn, setIsOn] = useState(false);
  function setThings() {
    setIsOn(!isOn);
    toggleColorMode();
  }
  return (
    <Flex
      pos="absolute"
      top="80px"
      left="150px"
      rounded="full"
      bg="bg"
      border="1px solid #FF3333"
      boxShadow="0px 0px 32px rgba(0, 0, 0, 0.04)"
      w="100px"
      p="6px"
      onClick={setThings}
      justify={!isOn ? "flex-start" : "flex-end"}
      transition=".3s"
    >
      <MotionBox
        layout
        // animate={colorMode}
        rounded="full"
        bg="daprRed"
        w="38px"
        h="38px"
        variants={variants}
      >
        <SunIcon width="14px" />
      </MotionBox>
    </Flex>
  );
}
