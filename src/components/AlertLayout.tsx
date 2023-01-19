import React from 'react'

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CircularProgress,
  } from '@chakra-ui/react'

export const AlertLayout = () => {
  return (
    <Alert status='warning'>
    <CircularProgress value={80} /> 
    Data Loading
  </Alert>
  )
}
