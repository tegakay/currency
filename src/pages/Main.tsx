import React, { useState, useEffect } from "react";
import { AlertLayout } from "../components/AlertLayout";
import { CardLayout as Card } from "../components/CardLayout";
import { NavBar } from "../components/NavBar";
import { Container } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import '../App.css'

interface dataProps {
  EUR: string;
  GBP: string;
  USD: string;
}

export const Main = () => {
  const [data, setData] = useState<dataProps>();

  useEffect(() => {
    fetchreq();
  }, []);

  const fetchreq = () => {
    fetch(`https://api.exchangerate.host/latest?base=NGN&symbols=USD,EUR,GBP`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error Occured");
        }
      })
      .then((data) => setData(data.rates))
      .then((data) => {})
      .catch((error) => {
        console.log("code here");
      });
  };

  return (
    <div className="bguia">
    <NavBar />
    <Container >
     
      {!data ? (
        <AlertLayout />
      ) : (
        <Card EUR={data.EUR} GBP={data.GBP} USD={data.USD} />
      )}
      
    </Container>
    <Footer/>
    </div>
  );
};
