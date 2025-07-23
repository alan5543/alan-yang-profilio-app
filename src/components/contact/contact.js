import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Snackbar, Alert, CircularProgress, LinearProgress } from '@mui/material';
import { FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import './contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = t('contact.errors.name');
    if (!formData.email) {
      newErrors.email = t('contact.errors.email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.errors.emailInvalid');
    }
    if (!formData.message) newErrors.message = t('contact.errors.message');
    if (formData.message.length > 3000) {
      newErrors.message = t('contact.errors.messageTooLong');
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post('https://personalwebapi-khoe.onrender.com/send-message', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });
      
      if (response.data.success) {
        setSnackbarMessage(t('contact.success'));
        setSnackbarSeverity('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSnackbarMessage(t('contact.error'));
        setSnackbarSeverity('error');
      }
    } catch (error) {
      let errorMessage = t('contact.error');
      if (error.response) {
        // Handle specific API error messages
        if (error.response.status === 400) {
          errorMessage = error.response.data.detail || t('contact.error');
        } else if (error.response.status === 500) {
          errorMessage = t('contact.serverError');
        }
      }
      setSnackbarMessage(errorMessage);
      setSnackbarSeverity('error');
    }
    setIsSubmitting(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const progress = (formData.message.length / 3000) * 100;

  return (
    <div className="contactAppContainer" id="contact">
      <div className="contactTitle">
        <h1 className="contactTitleName">{t('contact.title')}</h1>
        <h1 className="contactSubtitleName">{t('contact.subtitle')}</h1>
      </div>
      <div className="contactCard animate-book-open">
        <form onSubmit={handleSubmit} className="contactForm space-y-6" noValidate>
          <div className="fade-in">
            <TextField
              fullWidth
              label={t('contact.name')}
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              variant="outlined"
              disabled={isSubmitting}
              placeholder={t('contact.namePlaceholder')}
              InputLabelProps={{ shrink: true }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#2a2a2a',
                  '&:hover fieldset': { borderColor: '#61b8ff', boxShadow: '0 0 8px #61b8ff' },
                  '&.Mui-focused fieldset': { borderColor: '#42A5F5', boxShadow: '0 0 12px #42A5F5' },
                  color: '#ffffff',
                },
                '& .MuiInputLabel-root': { color: '#ffffff' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#DCD427' },
                '& .MuiFormHelperText-root': { color: '#969696' },
              }}
              inputProps={{ 'aria-describedby': 'name-helper-text' }}
            />
          </div>
          <div className="fade-in" style={{ animationDelay: '0.1s' }}>
            <TextField
              fullWidth
              label={t('contact.email')}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              variant="outlined"
              disabled={isSubmitting}
              placeholder={t('contact.emailPlaceholder')}
              InputLabelProps={{ shrink: true }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#2a2a2a',
                  '&:hover fieldset': { borderColor: '#61b8ff', boxShadow: '0 0 8px #61b8ff' },
                  '&.Mui-focused fieldset': { borderColor: '#42A5F5', boxShadow: '0 0 12px #42A5F5' },
                  color: '#ffffff',
                },
                '& .MuiInputLabel-root': { color: '#ffffff' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#DCD427' },
                '& .MuiFormHelperText-root': { color: '#969696' },
              }}
              inputProps={{ 'aria-describedby': 'email-helper-text' }}
            />
          </div>
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <TextField
              fullWidth
              label={t('contact.message')}
              name="message"
              multiline
              rows={8}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              variant="outlined"
              disabled={isSubmitting}
              placeholder={t('contact.messagePlaceholder')}
              InputLabelProps={{ shrink: true }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#2a2a2a',
                  '&:hover fieldset': { borderColor: '#61b8ff', boxShadow: '0 0 8px #61b8ff' },
                  '&.Mui-focused fieldset': { borderColor: '#42A5F5', boxShadow: '0 0 12px #42A5F5' },
                  color: '#ffffff',
                  minHeight: '250px',
                },
                '& .MuiInputLabel-root': { color: '#ffffff' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#DCD427' },
                '& .MuiFormHelperText-root': { color: '#969696' },
              }}
              inputProps={{ 'aria-describedby': 'message-helper-text' }}
            />
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: '10px',
                borderRadius: '5px',
                backgroundColor: '#4b5563',
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(90deg, #61b8ff, #42A5F5)',
                },
              }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            sx={{
              background: 'linear-gradient(90deg, #61b8ff, #42A5F5)',
              padding: '8px 0',
              fontSize: '1rem',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#ffffff',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 0 15px #42A5F5',
                transition: 'all 0.4s ease',
              },
              '&:disabled': {
                background: '#4b5563',
                boxShadow: 'none',
              },
            }}
            startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <FaPaperPlane />}
            aria-label={t('contact.submit')}
            className="pulse"
          >
            {isSubmitting ? t('contact.submitting') : t('contact.submit')}
          </Button>
        </form>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          TransitionComponent="Slide"
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            icon={snackbarSeverity === 'success' ? <FaPaperPlane /> : false}
            sx={{
              width: '100%',
              backgroundColor: snackbarSeverity === 'success' ? '#4CAF50' : '#f44336',
              color: '#140c14',
              borderRadius: '10px',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
              '& .MuiAlert-icon': { color: '#140c14' },
            }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Contact;