import React from 'react'
import {Flex , Avatar , Heading} from "@chakra-ui/react"
import {useRouter} from "next/router"
import {collection , addDoc , query} from "firebase/firestore"
import { db } from '../../firebaseconfig'
import { useCollectionData } from "react-firebase-hooks/firestore"

const Topbar = ({email}:any) => {
  const router = useRouter()
  const {id} = router.query

  // const q = query(collection(db, "chats", id, "messages"), orderBy("timeStamp"))
  // const [messages] = useCollectionData  (q);
  

  
  return (
    <Flex
    bgColor={"gray.100"}
    h={"81px"}
    w={"100%"}
    align={"center"}
    p={5}
    >
        <Avatar src="" marginEnd={3} />
        <Heading size={"lg"}> {email}  </Heading>
    </Flex>
  )
}

export default Topbar