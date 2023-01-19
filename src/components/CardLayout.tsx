import React from "react";
import { Card, CardHeader, CardBody, } from "@chakra-ui/react";
import {  Heading, Center } from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  
} from "@chakra-ui/react";

interface cardProps {
  EUR: string;
  GBP: string;
  USD: string;
}
export const CardLayout = ({ EUR, GBP, USD }: cardProps) => {
  return (
    <Center>
      <Card align="center" maxW="sm" mt="40px" bg="tomato">
        <CardHeader>
          <Heading size="md">Current Exchange Rate</Heading>
        </CardHeader>

        <CardBody>
          <Stat>
            <StatLabel>Naira to Euros</StatLabel>
            <StatNumber>{EUR}</StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Naira to Pounds</StatLabel>
            <StatNumber>{GBP}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Naira to Dollars</StatLabel>
            <StatNumber>{USD}</StatNumber>
          </Stat>
        </CardBody>
      </Card>
    </Center>
  );
};
