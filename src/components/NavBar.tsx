import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwich from "./ColorModeSwich";

const NavBar = () => {
  console.log("API key:", import.meta.env);
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwich />
    </HStack>
  );
};
export default NavBar;
