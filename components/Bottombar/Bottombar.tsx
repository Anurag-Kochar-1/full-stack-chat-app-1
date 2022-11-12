import React from 'react'
import {Flex , Input , FormControl , Button} from "@chakra-ui/react"

const Bottombar = () => {
  return (
    <FormControl
    p={3}
    >
        <Input 
            placeholder='message....'
        />

        <Button type="submit" hidden> Submit </Button>

    </FormControl>
  )
}

export default Bottombar