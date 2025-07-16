import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { Slide } from '@mui/material';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';
import Divider from '@mui/material/Divider';


// Custom fade-in scale animation
const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Custom slide-up animation
const slideUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 3,
  boxShadow: theme.shadows[10],
  border: `1px solid ${theme.palette.divider}`,
  animation: `${slideUp} 0.4s ease-out forwards`,
}));

const Popup = ({ open, handleClose, info }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      TransitionComponent={Transition}
      transitionDuration={500}
      PaperProps={{
        style: {
          borderRadius: '16px',
          overflow: 'hidden',
          animation: `${fadeInScale} 0.5s ease-in-out`,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
        },
      }}
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
        },
      }}
    >
      <DialogTitle
        sx={{
            background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
            color: 'white',
            padding: '16px 24px',
            position: 'relative',
            textAlign: 'center', // Add this to center the text
            '& .MuiTypography-root': { // Target the Typography component specifically
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            }
        }}
        >
        <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>
          {info.title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: 0 }}>
        <Box sx={{ padding: 3 }}>
          <StyledCard>
            <CardMedia
              component="img"
              height="300"
              image={info.image}
              alt={info.title}
              sx={{
                borderRadius: '12px',
                objectFit: 'cover',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                marginBottom: 3,
                border: '1px solid rgba(0, 0, 0, 0.1)',
              }}
            />
            <Box
            sx={{
                '& p': {
                marginBottom: 2,
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                },
            }}
            >
            {info.detail && info.detail.map((detail, index) => (
                <React.Fragment key={index}>
                <Typography component="p">
                    {detail}
                </Typography>
                {index < info.detail.length - 1 && (
                    <Divider sx={{ 
                    my: 2, 
                    borderColor: 'rgba(0, 0, 0, 0.12)',
                    borderBottomWidth: '1px'
                    }} />
                )}
                </React.Fragment>
            ))}
            </Box>
          </StyledCard>
        </Box>
      </DialogContent>
      <DialogActions sx={{ 
        padding: 2, 
        background: 'rgba(0, 0, 0, 0.02)',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {info.link && (
        <Button
          variant="contained"
          onClick={() => window.open(info.link, "_blank")}
          startIcon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor"/>
            </svg>
          }
          sx={{
            background: 'linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%)',
            color: 'white',
            fontWeight: 500,
            padding: '8px 20px',
            fontSize: '0.875rem',
            borderRadius: '50px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              background: 'linear-gradient(135deg, #6340cc 0%, #7bc4bf 100%)',
              boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
            },
            minWidth: 'auto',
            height: '36px'
          }}
        >
          Source Code
        </Button>
      )}          
      {info.DocLink && (
        <Button
          variant="contained"
          onClick={() => window.open(info.DocLink, "_blank")}
          startIcon={
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 9H8" stroke="currentColor" strokeWidth="2"/>
            </svg>
          }
          sx={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            color: 'white',
            fontWeight: 500,
            padding: '8px 20px',
            fontSize: '0.875rem',
            borderRadius: '50px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              background: 'linear-gradient(135deg, #459ce5 0%, #00d9e5 100%)',
              boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
            },
            minWidth: 'auto',
            height: '36px'
          }}
        >
          Documentation
        </Button>
      )}
      {info.YouTubeLink && (
        <Button
          variant="contained"
          onClick={() => window.open(info.YouTubeLink, "_blank")}
          startIcon={
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="currentColor"/>
            </svg>
          }
          sx={{
            background: 'linear-gradient(135deg, #ff5e62 0%, #ff2c4f 100%)',
            color: 'white',
            fontWeight: 500,
            padding: '8px 20px',
            fontSize: '0.875rem',
            borderRadius: '50px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              background: 'linear-gradient(135deg, #e55458 0%, #e52846 100%)',
              boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
            },
            minWidth: 'auto',
            height: '36px'
          }}
        >
          YouTube
        </Button>
      )}
      {info.TryAndPlayLink && (
        <Button
          variant="contained"
          onClick={() => window.open(info.TryAndPlayLink, "_blank")}
          startIcon={
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M10 16.5l6-4.5-6-4.5v9z" fill="currentColor"/>
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" fill="currentColor"/>
            </svg>
          }
          sx={{
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            color: 'white',
            fontWeight: 500,
            padding: '8px 20px',
            fontSize: '0.875rem',
            borderRadius: '50px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              background: 'linear-gradient(135deg, #3bd36f 0%, #32e0c5 100%)',
              boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
            },
            minWidth: 'auto',
            height: '36px'
          }}
        >
          Live Demo
        </Button>
      )}
    </Box>
        <Button
          onClick={handleClose}
          variant="outlined"
          color="primary"
          sx={{
            textTransform: 'none',
            padding: '8px 24px',
            borderRadius: '50px',
            fontWeight: 600,
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;