import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaExpandAlt } from "react-icons/fa";
import { Chip } from '@mui/material';


export default function ExperienceItem({listData}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaExpandAlt />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{ fontWeight: "bold" }
            }>
            Skills Involved
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: '8px 16px' // Reduced from default 16px 24px
          }}
        >
          <Typography>
              {listData.map((item) => {
                  return (
                    <Chip
                      key={item}
                      className='cardContentElement'
                      label={item}
                      variant="contained"
                      color="info"
                      sx={{ '&:hover': { backgroundColor: "black", }, }}
                    />
                  );
              })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
