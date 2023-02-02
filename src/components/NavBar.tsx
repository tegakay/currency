import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    
  } from '@chakra-ui/react'


export const NavBar = () => {
  return (
    <Breadcrumb separator='-'>
  <BreadcrumbItem>
    <BreadcrumbLink  href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/convert'>Convert</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='/about'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  )
}
