import {
  Box,
  chakra,
  CircularProgress,
  Flex,
  FlexboxProps,
  FlexProps,
  useBreakpoint,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { MoonIcon, SunIcon } from "../assets/Icons";

const MotionBox = chakra(motion.div);

export default function ThemeSwitcher({ ...rest }: FlexProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bp = useBreakpoint();
  console.log(bp);

  function getVariants() {
    switch (bp) {
      case "md":
      case "sm":
      case "base":
        return {
          light: { y: 0 },
          dark: { y: "22px" },
        };

      default:
        return {
          light: { x: 0 },
          dark: { x: "48px" },
        };
    }
  }
  const variants = getVariants();

  const [isOn, setIsOn] = useState(colorMode != "light");
  function setThings() {
    setIsOn(!isOn);
    toggleColorMode();
  }
  return (
    <Flex
      rounded="full"
      bg="bg"
      border="1px solid #FF3333"
      boxShadow="0px 0px 32px rgba(0, 0, 0, 0.04)"
      w={["25px", null, null, "100px"]}
      h={["50px", null, null, "min-content"]}
      p={["3px", null, null, "6px"]}
      onClick={setThings}
      // justify={[!isOn ? "flex-start" : "flex-end"]}
      // transition=".3s"
      // justify="center"
      {...rest}
    >
      <MotionBox
        layout
        animate={colorMode}
        rounded="full"
        bg="daprRed"
        w={["19px", null, null, "38px"]}
        h={["19px", null, null, "38px"]}
        variants={variants}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {!isOn ? (
          <SunIcon width={["6.5px", null, null, "14px"]} fill="#fff" />
        ) : (
          <MoonIcon width={["6.5px", null, null, "14px"]} fill="#1a1a1a" />
        )}
      </MotionBox>
    </Flex>
  );
}
