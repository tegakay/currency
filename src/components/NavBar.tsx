import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Link,
    
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
    {/* <BreadcrumbLink href='https://github.com/tegakay/currency'>Github</BreadcrumbLink> */}
    <Link href='https://github.com/tegakay/currency'>Github</Link>
  </BreadcrumbItem>
</Breadcrumb>
  )
}
