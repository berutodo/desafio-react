import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { usersDefined } from '../providers/users';

export default function BasicTextFields() {
    const {users, setUsers} = usersDefined()
    const [valueUser, setValueUser] = useState([{
        name:{first: ''},
        id: {value: ''},
        email: '',
        dob:{age: 0},
        location:{city: ''},
        picture: {medium: ''}
    }])
    const filtro = (event) => {
        const filtragem = users.filter(a => a.name.first == `${event}`) 
        if(filtragem != ''){
            console.log('Não está vazio')
            setValueUser(users)
            setUsers(filtragem)
        }else if(event == '' && filtragem.length == 0)
        {
            setUsers(valueUser)
            console.log('Chegamos aqui')
        }
            else{
            console.log('Está vazio')
        }
        /* switch(filtragem){
            case (filtragem != ''):
                console.log('Não é vazio')
                setUsers(filtragem)
            case(filtragem == ''):
                console.log('Tá Vazio')
                setUsers(pastUsers)
            default:
                console.log('É Default')
                setUsers(pastUsers)
        } */
         
    }
  return (
  <>    
      <TextField id="standard-basic" onChange={(event) => filtro(event.target.value)}  label="Standard" variant="standard" />
      </>
  );
}
