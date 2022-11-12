import React from 'react'
import {Flex , Avatar , Text} from "@chakra-ui/react"

const ChatSidebarCard = () => {
  return (
    <Flex
        align={"center"}
        _hover={{bg: "gray.100", cursor: "pointer"}}
        p={3}
        >
            <Avatar src='' marginEnd={3}/>
            <Text> user@gmail.com </Text>
        </Flex>
  )
}

export default ChatSidebarCard