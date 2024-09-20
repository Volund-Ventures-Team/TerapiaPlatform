import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Box, CssBaseline, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h5: {
      fontWeight: 700,
      fontSize: '1.5rem',
      fontFamily: '"Poppins", sans-serif',
      color: '#0d47a1',
    },
    body2: {
      fontSize: '0.875rem',
      fontFamily: '"Poppins", sans-serif',
      color: '#0d47a1',
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      textTransform: 'none',
      fontSize: '0.875rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
            '& fieldset': {
              borderColor: '#e0e0e0',
            },
            '&:hover fieldset': {
              borderColor: '#b0bec5',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0d47a1',
            },
          },
          '& .MuiInputBase-input': {
            padding: '10px 14px',
            fontFamily: '"Poppins", sans-serif',
            color: '#333',
            fontWeight: 500,
          },
          marginBottom: '12px',
        },
      },
    },
  },
});

const Signup = () => {
  const [role, setRole] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          padding: 0,
          marginTop: '40px',
          paddingBottom: '20px',
        }}
      >
        <Grid container sx={{ height: 'auto', width: '100%' }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              height: 'auto',
              backgroundColor: '#f5f5f5',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url(./fro.webp)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              height: 'auto',
              backgroundColor: '#f0f0f0',
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '900px',
                padding: '20px',
                boxShadow: 3,
                borderRadius: '8px',
                backgroundColor: '#f0f0f0',
              }}
            >
              <Grid container justifyContent="space-between" sx={{ marginBottom: 2 }}>
                <Grid item>
                  <img src="./logo.png" alt="Logo" style={{ height: '40px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ color: '#333' }}>
                    You have an account?{' '}
                    <RouterLink to="/login" style={{ color: theme.palette.primary.main, fontWeight: 'bold', textDecoration: 'none' }}>
                      Sign In
                    </RouterLink>
                  </Typography>
                </Grid>
              </Grid>
              <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>
                Get Started
              </Typography>
              <Typography component="p" variant="body2" sx={{ textAlign: 'center', marginBottom: 2 }}>
                Getting started is easy
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 1 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<img src="./google.jpeg" alt="Google" style={{ width: '18px' }} />}
                  sx={{
                    textTransform: 'none',
                    borderColor: '#db4437',
                    color: '#db4437',
                    marginRight: 0.5,
                    padding: '8px 0',
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                  }}
                >
                  Google
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<img src="./face.jpeg" alt="Facebook" style={{ width: '18px' }} />}
                  sx={{
                    textTransform: 'none',
                    borderColor: '#4267B2',
                    color: '#4267B2',
                    marginLeft: 0.5,
                    padding: '8px 0',
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                  }}
                >
                  Facebook
                </Button>
              </Box>
              <Typography component="p" variant="body2" sx={{ textAlign: 'center', marginY: 1 }}>
                Or continue with
              </Typography>
              <TextField
                label="Full Name"
                type="text"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Enter Email"
                type="email"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 2 }}
              />

              {/* Role Selection */}
              <Typography component="p" variant="body2" sx={{ textAlign: 'center', marginY: 2 }}>
                Select your role
              </Typography>
              <RadioGroup
                value={role}
                onChange={handleRoleChange}
                row
                sx={{ justifyContent: 'center', marginBottom: 2 }}
              >
                <FormControlLabel
                  value="therapist"
                  control={<Radio color="primary" />}
                  label="Therapist"
                />
                <FormControlLabel
                  value="client"
                  control={<Radio color="primary" />}
                  label="Client"
                />
              </RadioGroup>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ textTransform: 'none', padding: '10px 0', fontWeight: 'bold', fontSize: '0.875rem' }}
              >
                Create Account
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
