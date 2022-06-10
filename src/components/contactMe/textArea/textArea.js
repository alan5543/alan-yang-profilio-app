import React from 'react'
import { TextareaAutosize } from '@mui/material'
import { TextField } from '@mui/material'

const TextArea = () => {
  return (

    <div className='textArea'>
      <TextField
        variant='outlined'
        placeholder='Write somethings to me'
        multiline
        rows={15}
        sx={{ m: 1, width: '65vw' }} />
    </div>
  )
}

export default TextArea