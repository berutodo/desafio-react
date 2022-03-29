import React, {useState, useEffect} from 'react';
import {ModalMain} from './Modal';
import '../App.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Tabela(){
    /* const [users, setUsers] = useState([{
        id:10,
        name: 'Gabriel',
        email: 'gabriel@gmail.com',
        phone: '123-456-111'
    }]) */
    

    useEffect(() => {loadUsers()},[])
    const [users, setUsers] = useState([{
        name: '',
        email: '',
        dob:{age: 0},
        location:{city: ''},
        picture: {medium: ''}
    }])

    const loadUsers = async () => {
        const request = fetch('https://randomuser.me/api/?results=5')
        const [requests] = await Promise.all([request]);
        const requestJson = await requests.json();
        console.log(requestJson.results)
        
        setUsers(requestJson.results)
    }

    const filtro = () => {
      const filtragem = users.filter( a => a.gender === 'female')
      console.log(filtragem.map(a => a.name.first))
      setUsers(filtragem)
    }
 
    
    
    return(
        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.name.first}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name.first}
              </TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.dob.age}</TableCell>
              <TableCell align="right"><ModalMain user={row}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <table>
        <tr>
          <td>Nome</td>  
          <td>Gênero</td>  
          <td>Aniversário</td>  
          <td>Ações</td>  
        </tr>
        {users.map(
            user => (
        <tr key={user.name.first}>
          <td>{user.name.first}</td>  
          <td>{user.gender}</td>  
          <td>{user.dob.age}</td>  
          <td><button onClick={() => console.log(`
            O nome ${user.gender === 'male' ? ' do vagabundo' : 'da vagabunda'} é :${user.name.first}  com idade de ${user.dob.age}
          `)}>
                Abrir Modal
              </button><button onClick={filtro }>Teste</button>
              <button onClick={loadUsers}>Recarregar</button>
              <ModalMain user={user}/></td>
      
        </tr>
        
            )
            
        )}
        
      </table>
      
      </>
    );
}
export default Tabela;