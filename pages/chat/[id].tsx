import React from 'react'
import {Flex , Text} from "@chakra-ui/react"
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import Bottombar from '../../components/Bottombar/Bottombar'
import Head from 'next/head'

const Chat = () => {
  return (
    <Flex
    h={"100vh"}
    >
        <Head>
            <title> chat </title>
        </Head> 
    
        <Sidebar />

        <Flex
        bgColor={"green.100"}
        direction={"column"}
        flex={1}
        >
            <Topbar />

            <Flex 
            flex={1}
            direction={"column"}
            pt={4}
            mx={5}
            overflowX={"scroll"}
            sx={{scrollbarWidth: "none"}}
            >
                <Flex>
                    <Text 
                        bgColor={"blue.100"}
                        w={"fit-content"}
                        minWidth={"100px"}
                        rounded={"md"}
                        p={3}
                        m={1}
                        > message 1 ss </Text>
                </Flex>
                

                <Flex >
                    <Text 
                        bgColor={"pink.100"}
                        w={"fit-content"}
                        minWidth={"100px"}
                        rounded={"md"}
                        p={3}
                        m={1}
                        alignSelf={"flex-end"}
                        > message 2 ss </Text>
                </Flex>

            </Flex>
            <Bottombar />

        </Flex>
    
    
    </Flex>
  )
}

export default Chat