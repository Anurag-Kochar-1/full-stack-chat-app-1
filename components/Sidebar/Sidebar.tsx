import React from 'react'
import { Flex , IconButton , Text , Avatar , Button } from "@chakra-ui/react"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import ChatSidebarCard from './ChatSidebarCard/ChatSidebarCard'
import { signOut } from "firebase/auth"
import { auth } from '../../firebaseconfig'
import {collection , addDoc} from "firebase/firestore"
import { db } from '../../firebaseconfig'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';


const Sidebar = () => {
    const [user] = useAuthState(auth)

    const [snapshot, loading, error] = useCollection(collection(db, "chats"));
    const chats = snapshot?.docs.map((doc) => ({id: doc.id, ...doc.data()}))

    const newChat = async () => {
        const input = prompt("Enter email of chat recipient")
        if(input !== null && input.length !== 0) {
            await addDoc(collection(db, "chats"), {users: [user?.email, input]})
        } else {
            alert("Enter correct Email")
        }
    }
    
  return (
    <Flex
        // bgColor={"blue.100"}
        w={"300px"}
        borderEnd={"1px solid"}
        borderColor={"gray.300"}
        direction={"column"}
        h={"100%"}
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
                <Avatar src={user?.photoURL as string} />
                <Text ml={2}> {user?.displayName} </Text>
            </Flex>

            <IconButton aria-label='button' size={"sm"} icon={<ArrowLeftIcon />} 
            onClick={() => {
                signOut(auth)
            }}
            />
        </Flex>

        <Button 
        m={5}
        p={4}
        onClick={() => newChat()}
        > New Chat </Button>

        <Flex
            overflowX={"scroll"}
            direction={"column"}
            sx={{scrollbarWidth: "none"}}
            flex={1}
        >
            {chats && chats.filter(chat => chat.users.includes(user?.email)).map((chat) => {
                return <ChatSidebarCard key={chat.id} chat={chat} currentUser={user}  />
            })}
        </Flex>

    </Flex>
  )
}

export default Sidebar