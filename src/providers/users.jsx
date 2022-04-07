import React, {useState, useEffect} from 'react';


export const UserContext = React.createContext({})



export const UserProvider = (props) => {
    const [users, setUsers] = useState([{
        name:{first: ''},
        id: {value: ''},
        email: '',
        dob:{age: 0},
        location:{city: ''},
        picture: {medium: ''}
    }])
    async function loadUsers() {
        const request = fetch('https://randomuser.me/api/?results=10')
        const [requests] = await Promise.all([request]);
        const requestJson = await requests.json();
        setUsers(requestJson.results)
    }    
    
    
    useEffect(() => {loadUsers()},[])

    return(
        <UserContext.Provider value={{users, setUsers}}>
            {props.children}
        </UserContext.Provider>
    )
    
}

export const usersDefined = () => React.useContext(UserContext)