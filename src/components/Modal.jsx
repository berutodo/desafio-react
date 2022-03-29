import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export function ModalMain ({user}){
    const nomeCompleto = user.name.first + ' ' + user.name.last
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Boxstyle">
        <Stack direction="row" spacing={2}>
            <Avatar alt={nomeCompleto} src={user.picture.medium} />
        </Stack>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nome Completo: {nomeCompleto}
          </Typography>
          <Typography id="modal-modal-description">
          Email: {user.email}
          </Typography>
          <Typography id="modal-modal-description">
          Genero {user.gender}
          </Typography>
          <Typography id="modal-modal-description">
          Data de Nascimento {user.dob.date}
          </Typography>
          <Typography id="modal-modal-description">
          Telefone {user.phone}
          </Typography>
          <Typography id="modal-modal-description">
          Nacionalidade {user.nat}
          </Typography>
          <Typography id="modal-modal-description">
          Endereço {user.location.city}
          </Typography>
        </Box>
      </Modal>
      </>
    )
}