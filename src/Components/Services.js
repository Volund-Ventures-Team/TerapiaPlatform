import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import Footer from './Footer'; // Remove Starfield import

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', 
    },
    secondary: {
      main: '#03A9F4', 
    },
    background: {
      default: '#121212', 
    },
    text: {
      primary: '#FFFFFF', 
      secondary: '#B0BEC5', 
    },
  },
  typography: {
    h4: {
      fontWeight: 'bold', 
      color: '#2196F3', 
    },
    body1: {
      fontWeight: 'bold', 
      color: '#B0BEC5', 
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 'bold', 
      color: '#B0BEC5', 
      fontSize: '0.875rem',
    },
    h6: {
      fontWeight: 'bold', 
      color: '#03A9F4', 
    },
  },
});

const ServicesContainer = styled.div`
  position: relative;
  overflow: hidden;

  .services-container {
    padding: 2rem;
    min-height: 100vh;
    background-color: #f0f0f0; /* Updated background color */
  }

  .service-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(211, 211, 211, 0.5);
    border-radius: 12px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    overflow: hidden; 
    height: 150px;
    margin-bottom: 1.5rem; 
    border: none; 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width : 100%;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
  }

  .service-image {
    width: 150px;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .service-content {
    padding: 1rem;
    flex: 1;
    color: ${theme.palette.text.primary}; 
    font-weight: bold;
  }

  .service-title {
    font-weight: bold; 
    color: ${theme.palette.primary.main}; 
  }

  .service-description {
    font-weight: bold;
    color: ${theme.palette.text.secondary};
  }

  .intro-text {
    margin-bottom: 2rem;
    color: ${theme.palette.text.secondary}; 
    font-weight: bold; 
    font-size: 1rem;
    text-align: center;
  }

  .explore-button {
    margin-top: 1rem; 
    text-transform: none; 
    padding: 0; 
    min-width: 0; 
    color: ${theme.palette.primary.main}; 
    background: none; 
    box-shadow: none; 
    border: none; 
    text-decoration: none; 
    display: inline;
    font-weight: bold; 
  }
`;

const services = [
  { src: '/individual.jpg.webp', title: 'Individual Therapy', description: 'Personalized one-on-one therapy sessions.' },
  { src: '/group.jpg.webp', title: 'Group Therapy', description: 'Support and therapy in a group setting.' },
  { src: '/family.jpg.webp', title: 'Family Therapy', description: 'Therapy sessions for family members together.' },
  { src: '/online.jpg.webp', title: 'Online Counseling', description: 'Virtual therapy sessions from the comfort of your home.' },
  { src: '/family.jpg.webp', title: 'Psychological Assessment and Testing', description: 'Evaluates mental health, cognitive abilities, and personality through standardized tests.' },
  { src: '/online.jpg.webp', title: 'Stress Management Therapy', description: 'Helps individuals manage and reduce stress using relaxation techniques and coping strategies.' },
];

function Services() {
  return (
    <ThemeProvider theme={theme}>
      <ServicesContainer>
        <div className="services-container">
          <Typography variant="h4" gutterBottom align="center" style={{ margin: '2rem 0' }}>
            Our Services
          </Typography>
          <Typography variant="body1" className="intro-text">
            Discover the wide range of services we offer to meet your needs. Our dedicated team provides personalized therapy sessions, whether you're looking for one-on-one support, group interaction, or virtual counseling from the comfort of your home.
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card className="service-card">
                  <div
                    className="service-image"
                    style={{ backgroundImage: `url(${service.src})` }}
                  ></div>

                  <CardContent className="service-content">
                    <Typography variant="h6" component="div" className="service-title">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" className="service-description">
                      {service.description}
                    </Typography>
                    <Button 
                      component="a" 
                      href="#" 
                      className="explore-button"
                    >
                      Explore Service
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </ServicesContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default Services;
