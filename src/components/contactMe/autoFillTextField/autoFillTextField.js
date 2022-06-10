import React from 'react'
import { TextField, Autocomplete } from '@mui/material'


const AutoFillTextField = ({id, label, data}) => {
  return (
    <Autocomplete
        disablePortal
        id={id}
        options={data}
        sx={{ m: 1, width: '30vw' }}
        renderInput={(params) => <TextField {...params} label={label}/>}
    />
  )
}

export default AutoFillTextField