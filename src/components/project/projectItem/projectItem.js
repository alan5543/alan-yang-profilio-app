import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './projectItem.css'

export default function ProjectCard({info}) {

    const openSourceCode = () => {
        window.open(info.link, "_blank");
    }

    const openLearnMore = () => {
        if (!info.haveDoc){
            alert("Not yet Update. Check it later.")
        }
        window.open(info.DocLink, "_blank");
    }

  return (
    <Card className="projCardContainer">
      <CardMedia
        component="img"
        height="300"
        image={info.image}
        alt={info.title}
      />
      <CardContent className='projCardContent'>
        <Typography gutterBottom variant="h5" component="div">
            {info.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {info.elements.map((intro) => {
                return (
                    <li>{intro}</li>
                );
            })}
        </Typography>
      </CardContent>
      <CardActions>
          {info.haveCode ? <Button size="small" variant="contained" color="info" onClick={openSourceCode}>Source Code</Button> : null}
          {info.haveDoc ? <Button size="small" variant="outlined" color="info" onClick={openLearnMore}>Learn More</Button> : null}
      </CardActions>
    </Card>
  );
}
