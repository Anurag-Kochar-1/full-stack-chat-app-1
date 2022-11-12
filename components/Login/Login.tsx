import Head from 'next/head'
import React from 'react'
import { ChatIcon } from "@chakra-ui/icons"
import { Box , Button, Center , Stack} from "@chakra-ui/react"

const Login = () => {
  return (
    <>
        <Head>
            <title> Login </title>
        </Head>

        <Center
            h={"100vh"}
        >
            <Stack 
                align={"center"} 
                bgColor={"gray.600"}    
                p={16}
                rounded={"3xl"}
                spacing={12}
                boxShadow="md"
            >
                <Box
                    bgColor="blue.500"
                    w={"fit-content"}
                    p={"5"}
                    rounded={"3xl"}
                    >
                    <ChatIcon w="100px" h="100px" color={"white"} />
                </Box>
                <Button boxShadow={"md"}> Sign in with goggle </Button>
            </Stack>
        </Center>

    </>
  )
}

export default Login