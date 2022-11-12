const getOtherEmail = (users:string[], currentUser:any) => {
    return users?.filter(user => user !== currentUser?.email)[0]

}

export default getOtherEmail