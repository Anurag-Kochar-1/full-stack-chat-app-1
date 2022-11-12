import React from 'react'
import {Flex , Text} from "@chakra-ui/react"
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import Bottombar from '../../components/Bottombar/Bottombar'
import Head from 'next/head'

import {query, collection , doc} from "firebase/firestore"
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore"
import { useRouter } from 'next/router'
import { db } from '../../firebaseconfig'
import MessageBox from '../../components/MessageBox/MessageBox'
import getOtherEmail from '../../utils/getOtherEmail'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebaseconfig"

const Chat = () => {
    const [user, loading, error] = useAuthState(auth)  
    const router = useRouter()
    const { id } = router.query

    const q = query(collection(db, `chats/${id}/messages`))
    const [messages] = useCollectionData (q);
    
    // const getMessages = () => {
        
    // }

    const [chat] = useDocumentData(doc(db, "chats" , id))
    console.log(chat);
    
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
            <Topbar email={getOtherEmail(chat?.users, user)} />

            <Flex 
            flex={1}
            direction={"column"}
            pt={4}
            mx={5}
            overflowX={"scroll"}
            sx={{scrollbarWidth: "none"}}
            >
                
            {messages?.map((message) => {
            return <MessageBox key={Math.random()} message={message} />
            })}

                

            </Flex>
            <Bottombar id={id} />

        </Flex>
    
    
    </Flex>
  )
}

export default Chat