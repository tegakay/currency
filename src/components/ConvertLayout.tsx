import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { ConvertView } from "./ConvertView";

export const ConvertLayout = () => {
  const [formData, setFormData] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setFormData(prev=>!prev)
  }

  return (
    <div>
      <form>
        <FormControl>
          <InputGroup>
            <InputLeftAddon children="Type Amount" />
            <Input type="number" placeholder="" />
          </InputGroup>

          <FormLabel>From</FormLabel>
          <Select placeholder="Select Currency">
            <option>USD</option>
            <option>Pound</option>
            <option>Euro</option>
          </Select>

          <FormLabel>To</FormLabel>
          <Select placeholder="Select Currency">
            <option>USD</option>
            <option>Pound</option>
            <option>Euro</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" onClick={handleClick}>
          Convert
        </Button>
      </form>

      {formData && <ConvertView />}
    </div>
  );
};
