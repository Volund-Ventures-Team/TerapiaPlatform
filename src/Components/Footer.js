import React, { useEffect } from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import { Facebook, Instagram, YouTube, Twitter } from '@mui/icons-material';
import { createTheme, ThemeProvider, CssBaseline, GlobalStyles as MUIGlobalStyles } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', 
    },
    secondary: {
      main: '#c62828', 
    },
    background: {
      default: '#e3f2fd',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0', 
    },
  },
  typography: {
    h5: {
      fontWeight: 'bold',
      color: '#ffffff',
    },
    body1: {
      color: '#b0b0b0',
    },
    body2: {
      color: '#b0b0b0',
    },
  },
});


const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={{
      body: {
        backgroundColor: theme.palette.background.default,
        margin: 0,
        padding: 0,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      },
    }}
  />
);

const Footer = () => {
  useEffect(() => {
    const styles = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.appendChild(document.createTextNode(styles));
    document.head.appendChild(styleSheet);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Box component="footer" sx={{ py: 5, mt: 'auto', backgroundColor: theme.palette.primary.main, color: theme.palette.text.primary, position: 'relative' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            
            <Grid item xs={12} md={4} sx={{ animation: 'fadeIn 1s ease-in-out' }}>
              <Typography variant="h5" gutterBottom>
                Clinique Therapy
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Urgences : 24h/24
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Hospitalisation : de 10h à 22h
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Réanimation : de 12h30 à 13h et de 18h à 19
              </Typography>
              <Box sx={{ display: 'flex', mt: 2 }}>
                <Link href="https://www.facebook.com/share/tn3DTmP6DVdCJThv/?mibextid=LQQJ4d" color="inherit" sx={{ mx: 1 }} target="_blank" rel="noopener noreferrer">
                  <Facebook fontSize="large" sx={{ color: theme.palette.text.primary, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }} />
                </Link>
                <Link href="https://www.instagram.com/leomessi?igsh=eXFid2VqcjY2Yjc5" color="inherit" sx={{ mx: 1 }} target="_blank" rel="noopener noreferrer">
                  <Instagram fontSize="large" sx={{ color: theme.palette.text.primary, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }} />
                </Link>
                <Link href="https://youtube.com/@fcbarcelona?si=SvLH8sjgF-bGvcBn" color="inherit" sx={{ mx: 1 }} target="_blank" rel="noopener noreferrer">
                  <YouTube fontSize="large" sx={{ color: theme.palette.text.primary, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }} />
                </Link>
                <Link href="https://x.com/leomessisite?s=21" color="inherit" sx={{ mx: 1 }} target="_blank" rel="noopener noreferrer">
                  <Twitter fontSize="large" sx={{ color: theme.palette.text.primary, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }} />
                </Link>
              </Box>
            </Grid>

            
            <Grid item xs={12} md={4} sx={{ animation: 'fadeIn 1s ease-in-out 0.5s' }}>
              <Typography variant="h5" gutterBottom>
                Nos Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body1">
                  Gestion du stress
                </Typography>
                <Typography variant="body1">
                  Traitement de l'anxiété
                </Typography>
                <Typography variant="body1">
                  Traitement de la dépression
                </Typography>
                <Typography variant="body1">
                  Thérapie cognitivo-comportementale
                </Typography>
                <Typography variant="body1">
                  Thérapie de groupe
                </Typography>
              </Box>
            </Grid>

            
            <Grid item xs={12} md={4} sx={{ animation: 'fadeIn 1s ease-in-out 1s' }}>
              <Typography variant="h5" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                +212 (0) 6 60 55 40 10
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                cbt-therapy@gmail.com
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Quartier masmoudi Targa, Marrakech
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="body2" sx={{ animation: 'fadeIn 1s ease-in-out 1.5s' }}>
              Copyright © 2024 Clinique Therapy. All rights reserved. Designed by Oussama&Taha
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
