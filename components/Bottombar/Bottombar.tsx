import React, {useState} from 'react'
import {Flex , Input , FormControl , Button} from "@chakra-ui/react"
import {query, collection , doc , addDoc} from "firebase/firestore"
import { db } from '../../firebaseconfig'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebaseconfig"
import { timeStamp } from 'console';


const Bottombar = ({id}:any) => {

  const [input, setInput] = useState<string>('')
  const [user, loading, error] = useAuthState(auth)  

  const sendMessage = async (e:any) => {
    console.log('sendMessage is running');
    
    e.preventDefault()
    if(input) {
      await addDoc(collection(db, `chats/${id}/messages`), {
        text: input,
        sender: user?.email,
        timeStamp: Date.now()
      })
      setInput("")
    } else {
      alert("Empty")
    }
    

  }

  return (
    <FormControl
    p={3}
    onSubmit={sendMessage}
    as="form"
    >
        <Input 
            placeholder='message....'
            autoComplete='off'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

        <Button type="submit" hidden > Submit </Button>

    </FormControl>
  )
}

export default Bottombar