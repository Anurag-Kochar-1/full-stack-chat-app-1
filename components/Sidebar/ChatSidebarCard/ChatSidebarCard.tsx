import React from 'react'
import {Flex , Avatar , Text} from "@chakra-ui/react"
import getOtherEmail from '../../../utils/getOtherEmail'
import {useRouter} from "next/router"
import Link from "next/link"

interface Props {
  id: string
  users: string[]
}

const ChatSidebarCard = ({ chat , currentUser }:any) => {

  
  return (
    <Link href={`/chat/${chat.id}`}>
      <Flex
            align={"center"}
            _hover={{bg: "gray.100", cursor: "pointer"}}
            p={3}
            >
                <Avatar src='' marginEnd={3}/>
                <Text fontSize={14}> {getOtherEmail(chat.users, currentUser)} </Text>
        </Flex>
    </Link>
  )
}

export default ChatSidebarCard