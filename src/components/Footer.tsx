import React from "react";
import { Icon, Link, Text, Center, Box } from "@chakra-ui/react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <Center pt="20px">
     <footer>
     <Text> Made by Kofi</Text>
      <Box p='4' textAlign='center'>
        <Link mr='4' href="https://github.com/tegakay" isExternal>
          <Icon as={BsGithub} />
        </Link>
        <Link mr='4' href="https://twitter.com/tega_kay" isExternal>
          <Icon as={BsTwitter} />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/kofi-oghenebrume-1b9879196/"
          isExternal
        >
          <Icon as={BsLinkedin} />
        </Link>
      </Box>
     </footer>
    </Center>
  );
};
