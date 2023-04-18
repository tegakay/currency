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

  let euro: number | string = 1/parseFloat(EUR)
  let gbp :number |string = 1/parseFloat(GBP)
  let usd :number |string = 1/parseFloat(USD)

  gbp = gbp.toFixed(2)
  usd = usd.toFixed(2)
  euro = euro.toFixed(2)
  
  return (
    <Center>
      <Card align="center" maxW="sm" mt="40px" bg="#bc6c25">
        <CardHeader>
          <Heading size="md">Current Exchange Rate</Heading>
        </CardHeader>

        <CardBody>
          <Stat>
            <StatLabel>Naira to Euros</StatLabel>
            <StatNumber>{euro}</StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Naira to Pounds</StatLabel>
            <StatNumber>{gbp}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Naira to Dollars</StatLabel>
            <StatNumber>{usd}</StatNumber>
          </Stat>
        </CardBody>
      </Card>
    </Center>
  );
};
