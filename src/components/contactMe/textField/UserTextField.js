import React from 'react'
import { TextField } from '@mui/material'

const UserTextField = ({id}) => {
  return (
    <TextField 
      id={id} 
      label="Enter Your Email" 
      variant="outlined" 
      defaultValue="Normal"
      sx={{ m: 1, width: '30vw' }}
      helperText="For our further communication"/>
  )
}

export default UserTextField