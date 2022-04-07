import React from 'react';
import { usersDefined } from '../providers/users';
import {ModalMain} from './Modal';
import '../App.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BasicTextFields from './SearchUsers';



function Tabela(){
    const {users, setUsers} = usersDefined()
    const filtro = () => {
      const filtragem = users.filter(a => a.gender === 'female')
      setUsers(filtragem)
  }
    
    return(
        <>
        <BasicTextFields/>
        <button onClick={filtro}>Pesquisar Mulheres</button>
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
              key={row.email}
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
      </>
    );
}
export default Tabela;