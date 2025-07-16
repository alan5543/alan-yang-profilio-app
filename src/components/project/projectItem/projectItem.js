import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './projectItem.css';
import Popup from './Popup'; // Import the new Popup component
import {useState} from 'react'

export default function ProjectCard({ info }) {
  const [openPopup, setOpenPopup] = useState(false);

  const openProject = () => {
    setOpenPopup(true);
  };

  const closePopup = () => {
    setOpenPopup(false);
  };

  const openProjectCode = () => {
    if (info.link) {
      window.open(info.link, "_blank");
    }
  };

  return (
    <Card className="projCardContainer">
      <CardMedia
        component="img"
        height="200"
        image={info.image}
        alt={info.title}
      />
      <CardContent className="projCardContent">
        <Typography gutterBottom variant="h5" component="div">
          {info.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.brief && info.brief.map((intro, index) => (
            <li key={index} style={{ marginBottom: '0.25rem' }}>{intro}</li>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          color="info"
          onClick={openProject}
        >
          Open Project
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={openProjectCode}
          disabled={!info.link}
        >
          Project Code
        </Button>
      </CardActions>
      <Popup open={openPopup} handleClose={closePopup} info={info} />
    </Card>
  );
}