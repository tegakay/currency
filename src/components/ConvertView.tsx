import React from 'react'
import { Card,  CardBody,Text } from '@chakra-ui/react'

export const ConvertView = ({rates,insert}:{rates:string,insert:string | undefined}) => {
console.log("forager",insert)
let stuff = '1'
if(insert){
   stuff = insert[0]
}
  let data
  if (insert){
     data = parseFloat(rates) * parseFloat(stuff)

     return (
      <div><Card>
      <CardBody>
        <Text>{insert} = {data} </Text>
      </CardBody>
    </Card></div>
    )

  } else{
    return (
      <div><Card>
      <CardBody>
        <Text>Error Parsing Data</Text>
      </CardBody>
    </Card></div>
    )
  }
  
}
