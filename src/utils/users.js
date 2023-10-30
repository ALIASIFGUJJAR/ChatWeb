const users= []

// addUsers, removeUsers, getUser, getUserInRoom

const addUser = ({id, username, room})=>{
    //clean the data
    username = String(username) .trim().toLowerCase()
    room = String(room).trim().toLowerCase()

    //validate the data 
    if(!username || !room){
        return{
            error: 'User are not in the room'
        }
    }
    //Check the existing user 

    const existingUser = users.find((user)=>{
         return user.room === room && user.username === username
    
    })

    //Validate  UserName
    if(existingUser){
        return{
            error: 'Username in Use!'
        }
    }

    //Store user
    const user = {id,username,room}
    users.push(user)
    return {user}
}

const removeUser= (id)=>{
    //findindex( It is used to find the index of the first 
    //element in the array that satisfies a given testing function.)
    const index = users.findIndex((user)=> user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]  //??
    }

}

const getUser = (id) =>{
    return users.find((user)=> user.id === id)
}

const getUserInRoom = (room) =>{
    room = room.trim().toLowerCase()
    return users.filter((user)=> user.room === room)
}

module.exports={
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}
,

