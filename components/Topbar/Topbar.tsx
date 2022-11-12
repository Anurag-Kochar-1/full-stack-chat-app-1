import React from 'react'
import {Flex , Avatar , Heading} from "@chakra-ui/react"

const Topbar = () => {
  return (
    <Flex
    bgColor={"gray.100"}
    h={"81px"}
    w={"100%"}
    align={"center"}
    p={5}
    >
        <Avatar src="" marginEnd={3} />
        <Heading size={"lg"}> user@gmail.com  </Heading>
    </Flex>
  )
}

export default Topbar