import React from 'react'
import AutoFillTextField from './autoFillTextField/autoFillTextField'
import TextArea from './textArea/textArea'
import UserTextField from './textField/UserTextField'
import './constact.css'
import { Box, FormControl, InputLabel } from '@mui/material'


const Contact = () => {

  const identityOptions = [
    { label: 'Mr', id:  1},
    { label: 'Mrs', id:  1},
    { label: 'Miss', id:  1},
    { label: 'Prof.', id:  1},
    { label: 'Dr.', id:  1},
    { label: 'Not Prefer to Say', id:  1}
  ]

  return (
      // // <div className='contactContainer'>
      // //     <div className='contactTitleContainer'>
      // //       <h1 className="contactTitleName">Leave A Message</h1>
      // //       <h1 className="contactSubtitleName">Thanks for taking the time to reach out. How can I help you today?</h1>
      // //     </div>

      // //     <div className='contactTextBox'>
      // //         <div className='personalInfoBox'>
      // //           <div className='identityOptionsContainer'>
      // //             <AutoFillTextField id='identityOptions' label='Choose Your Identity' data={identityOptions} />
      // //           </div>
                
      // //           <div className='emailContainer'>
      // //             <UserTextField id='email' />
      // //           </div>
      // //         </div>

      // //         <div className='msgBox'>
      // //           <TextArea />
      // //         </div>

      // //         <div className='userControlBox'>
                
      // //         </div>
      // //     </div>
      // // </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Box
          sx={{ display: 'flex', flexWrap: 'wrap', width: '65%', justifyContent: 'center', textAlign: 'start'}}>

            <FormControl>
              <AutoFillTextField id='identityOptions' label='Choose Your Identity' data={identityOptions} />
            </FormControl>

            <FormControl >
              <UserTextField id='email' />
            </FormControl>

            <FormControl>
              <TextArea />
            </FormControl>

        </Box>
      </div>

  )
}

export default Contact