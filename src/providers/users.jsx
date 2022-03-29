import React, {useState, useEffect} from 'react';


export const UserContext = React.createContext({})

export const UserProvider = (props) => {
    useEffect(() => {loadUsers()},[])
    const [users, setUsers] = useState([{
        name:{first: 'Gabriel'},
        email: '',
        dob:{age: 0},
        location:{city: ''},
        picture: {medium: ''}
    }])

    const loadUsers = async () => {
        const request = fetch('https://randomuser.me/api/?results=10')
        const [requests] = await Promise.all([request]);
        const requestJson = await requests.json();
        console.log(requestJson.results)
        
        setUsers(requestJson.results)
    }
    return(
        <UserContext.Provider value={{users, setUsers}}>
            {props.children}
        </UserContext.Provider>
    )
    
}

export const usersDefined = () => React.useContext(UserContext)