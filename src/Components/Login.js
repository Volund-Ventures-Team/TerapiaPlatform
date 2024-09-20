import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Grid, Box, Link, CssBaseline, FormControlLabel, Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';  // Imported icon

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', // Primary color (blue)
    },
    success: {
      main: '#4caf50', // Green color for the button
    },
    background: {
      default: '#f5f5f5', // Background color
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
            padding: '12px 16px',
            fontFamily: '"Poppins", sans-serif',
            color: '#333',
            fontWeight: 500,
          },
          marginBottom: '16px',
        },
      },
    },
  },
});

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Use the useNavigate hook

  const handleLogin = (event) => {
    event.preventDefault();
    const userData = { name: 'User', email }; // Mock user data
    onLogin(userData);
    navigate('/');  // Redirect to the home page after login
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
          paddingBottom: '20px', // Added padding at the bottom
        }}
      >
        <Grid container sx={{ height: 'auto', width: '100%' }}> {/* Full width grid container */}
          {/* Form on the left side */}
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
                maxWidth: '900px', // Large width to match Signup
                padding: '20px',
                boxShadow: 3,
                borderRadius: '8px',
                backgroundColor: '#ffffff',
              }}
            >
              <Grid container justifyContent="space-between" sx={{ marginBottom: 2 }}>
                <Grid item>
                  <img src="./logo.png" alt="Logo" style={{ height: '50px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ color: '#333', marginRight: '10px' }}>
                    Don't have an account?{' '}
                    <Link href="/signup" sx={{ color: theme.palette.primary.main, fontWeight: 'bold', textDecoration: 'none' }}>
                      Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                Welcome Back
              </Typography>
              <Typography component="p" variant="body2" sx={{ textAlign: 'center', marginBottom: 2 }}>
                Login into your account
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 2 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<img src="./google.jpeg" alt="Google" style={{ width: '20px' }} />}
                  sx={{
                    textTransform: 'none',
                    borderColor: '#db4437',
                    color: '#db4437',
                    marginRight: 1,
                    padding: '10px 0',
                    fontWeight: 'bold',
                  }}
                >
                  Google
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<img src="./face.jpeg" alt="Facebook" style={{ width: '20px' }} />}
                  sx={{
                    textTransform: 'none',
                    borderColor: '#4267B2',
                    color: '#4267B2',
                    marginLeft: 1,
                    padding: '10px 0',
                    fontWeight: 'bold',
                  }}
                >
                  Facebook
                </Button>
              </Box>
              <Typography component="p" variant="body2" sx={{ textAlign: 'center', marginY: 2 }}>
                Or continue with
              </Typography>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 2 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Grid container sx={{ alignItems: 'center', marginTop: 1, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <FormControlLabel
                  control={<Switch color="primary" />}
                  label="Remember me"
                  sx={{ marginLeft: 0 }}
                />
                <Link href="#" variant="body2" sx={{ color: 'red', textAlign: 'right', textDecoration: 'none' }}>
                  Recover Password
                </Link>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ marginTop: 3, marginBottom: 2, textTransform: 'none' }}
                onClick={handleLogin}
                startIcon={<ThumbUpAltIcon />}  // Using the icon here
              >
                Log In
              </Button>
            </Box>
          </Grid>
          {/* Image on the right side */}
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
                backgroundImage: `url('./ghoo.webp')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
