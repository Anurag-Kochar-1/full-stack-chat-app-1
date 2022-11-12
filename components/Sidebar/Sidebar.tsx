import React from 'react'
import { Flex , IconButton , Text , Avatar , Button } from "@chakra-ui/react"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import ChatSidebarCard from './ChatSidebarCard/ChatSidebarCard'

const Sidebar = () => {
  return (
    <Flex
        // bgColor={"blue.100"}
        w={"300px"}
        borderEnd={"1px solid"}
        borderColor={"gray.300"}
        direction={"column"}
    >

        <Flex 
        // bgColor="red.100"
        h={"81px"}
        w={"100%"}
        align="center"
        justifyContent={"space-between"}
        p={3}
        borderBottom="1px solid" borderColor={"gray.200"}
        >
            <Flex align="center">
                <Avatar src="" />
                <Text ml={2}> Anurag kochar </Text>
            </Flex>

            <IconButton aria-label='button' size={"sm"} icon={<ArrowLeftIcon />} />
        </Flex>

        <Button 
        m={5}
        p={4}
        > New Chat </Button>

        <Flex
            overflowX={"scroll"}
            direction={"column"}
            sx={{scrollbarWidth: "none"}}
            flex={1}
        >
            <ChatSidebarCard />
        </Flex>

    </Flex>
  )
}

export default Sidebar