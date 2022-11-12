import React from 'react'
import {Flex, Text} from "@chakra-ui/react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebaseconfig"

const MessageBox = ({message}:any) => {
    const [user, loading, error] = useAuthState(auth)  
    const sender = message.sender === user?.email
    return (
        <Flex m={1} justifyContent={sender ? "flex-end" : "flex-start"} p={2}>
            <Text
                bgColor={sender ? "blue.100" : "red.100"}
                w={"fit-content"}
                minWidth={"100px"}
                rounded={"md"}
                p={3}
                m={1}
                // alignSelf={sender ? "flex-start" : "flex-end"}
            > {message.text} </Text>
        </Flex>
    )
}

export default MessageBox