import React, { ChangeEvent, useState } from "react";
import { Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  InputGroup,
} from "@chakra-ui/react";
import { ConvertView } from "./ConvertView";

interface formData {
  number?: string ;
  from?: string;
  to?: string;
  rate?: string;
}
export const ConvertLayout = () => {
  const [formData, setFormData] = useState<formData>();
  const [convert, setConvert] = useState()
  const [showBox, setShowBox] = useState(false)
  let Value

  

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const fetchreq = () => {
      const from = formData?.from;
      const to = formData?.to;
      fetch(
        `https://api.exchangerate.host/convert?from=${from![0]}&to=${to![0]}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Error Occured");
          }
        })
        .then((data) => {
          console.log("responde", data.info.rate)
          let final
          let rate
          if(formData?.number){
             rate  = data?.info?.rate
           final  = formData?.number[0]!
          }
          console.log("params",formData?.number,rate,final )
           Value =  <ConvertView rates ={rate} insert ={final} />
          console.log("after",Value)
          setConvert(rate)
          setShowBox(true)
          return Value
        })
        
        .catch((error) => {
          console.log("code here",error);
        });
    };
console.log("before")
    fetchreq();
    
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: [value] });
  }

  return (
    <div  >
      <form >
        <FormControl >
          <InputGroup>
            {/* <InputLeftAddon children="Type Amount" /> */}
            <Input
              type="number"
              placeholder="Enter Amount"
              name="number"
              onChange={handleChange}
            />
          </InputGroup>

          <FormLabel>From</FormLabel>
          <Select
            placeholder="Select Currency"
            name="from"
            onChange={handleChange}
          >
            <option value="USD">USD</option>
            <option value="GBP">Pound</option>
            <option value="EUR">Euro</option>
          </Select>

          <FormLabel>To</FormLabel>
          <Select
            placeholder="Select Currency"
            name="to"
            onChange={handleChange}
          >
            <option value="USD">USD</option>
            <option value="GBP">Pound</option>
            <option value="EUR">Euro</option>
          </Select>
        </FormControl>
        <Button mt={7} colorScheme="blue"  onClick={handleClick}>
          Convert
        </Button>
      </form>

      {formData && showBox && <ConvertView rates ={convert?convert :'0'} insert ={formData.number} />}
      
    </div>
  );
};
