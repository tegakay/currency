import React from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Center } from "@chakra-ui/react";
import { ConvertLayout } from "../components/ConvertLayout";

export const Converter = () => {
  return (
    <>
      <NavBar />
      <Center>
        <ConvertLayout />
        
      </Center>
      <Footer />
    </>
  );
};
