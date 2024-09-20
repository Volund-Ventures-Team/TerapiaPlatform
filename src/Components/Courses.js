import React from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import Footer from './Footer'; 

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
      fontWeight: 700,
      marginBottom: '1rem',
      color: '#2196F3', 
    },
    body1: {
      fontWeight: 700, 
      color: '#B0BEC5', 
      lineHeight: 1.6,
    },
    subtitle1: {
      fontWeight: 700, 
      textAlign: 'center',
      color: '#FFFFFF', 
    },
    h6: {
      fontWeight: 700, 
      color: '#03A9F4', 
    },
    body2: {
      fontWeight: 700, 
      color: '#B0BEC5', 
    },
  },
});

const courses = [
  {
    title: 'Prevention Courses',
    description: 'Take care of your mental health before problems develop. These courses help you manage mild symptoms.',
    items: [
      { src: '/produit1.jpg.webp', title: 'Course 1', description: 'Description of Course 1' },
      { src: '/produit2.jpg.webp', title: 'Course 2', description: 'Description of Course 2' },
    ],
  },
  {
    title: 'Free Online Therapy Programmes',
    description: 'These courses are approved as Digital Health Applications (DiGA) in Germany and are covered by health insurance.',
    items: [
      { src: '/produit3.jpg.webp', title: 'Course 3', description: 'Description of Course 3' },
      { src: '/produit4.jpg.webp', title: 'Course 4', description: 'Description of Course 4' },
      { src: '/produit5.jpg.webp', title: 'Course 5', description: 'Description of Course 5' },
      { src: '/produit6.jpg.webp', title: 'Course 6', description: 'Description of Course 6' },
      { src: '/produit7.jpg.webp', title: 'Course 7', description: 'Description of Course 7' },
      { src: '/produit8.jpg.webp', title: 'Course 8', description: 'Description of Course 8' },
    ],
  },
  {
    title: 'Advanced Therapy Programmes',
    description: 'Advanced online therapy courses for deeper mental health support.',
    items: [
      { src: '/produit9.jpg.webp', title: 'Course 9', description: 'Description of Course 9' },
      { src: '/produit10.jpg.webp', title: 'Course 10', description: 'Description of Course 10' },
    ],
  },
];

const CoursesContainer = styled.div`
  position: relative;
  z-index: 1; 
  background-color: #f0f0f0; /* Updated background color */
  
  .courses-container {
    padding: 3rem 0;
    position: relative; 
    z-index: 2; 
  }
  

  .section {
    margin-bottom: 4rem;
  }

  .section-title {
    margin-bottom: 1.5rem;
    color: ${theme.palette.primary.main}; 
    font-weight: bold;
  }

  .section-description {
    max-width: 800px;
    margin: 0 auto 2rem;
    color: ${theme.palette.text.secondary}; 
    font-weight: bold; 
  }

  .course-card {
    display: flex;
    flex-direction: row;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
    background: rgba(211, 211, 211, 0.5); 
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
    overflow: hidden;
    width: 100%;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    }
  }

  .course-image {
    flex: 1;
    height: 160px;
    background-size: cover;
    background-position: center;
  }

  .course-content {
    flex: 2;
    padding: 1.5rem;
    text-align: left;
    color: ${theme.palette.text.primary}; 
  }

  .course-title {
    font-weight: 700; 
    margin-bottom: 0.5rem;
  }

  .course-description {
    margin-bottom: 1rem;
    color: ${theme.palette.text.secondary}; 
    font-weight: bold; 
  }

  .learn-more-link {
    color: ${theme.palette.secondary.main};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Courses() {
  return (
    <ThemeProvider theme={theme}>
      <CoursesContainer>
        <Container className="courses-container">
          <Typography variant="h4" align="center" gutterBottom>
            The Terapia Online Therapy Programmes at a Glance
          </Typography>
          <Typography variant="body1" align="center" className="section-description">
            We offer online therapy courses to help you quickly access support for a range of mental health problems.
          </Typography>
          {courses.map((section, index) => (
            <div key={index} className="section">
              <Typography variant="h4" align="center" className="section-title">
                {section.title}
              </Typography>
              <Typography variant="body1" align="center" className="section-description">
                {section.description}
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                {section.items.map((course, idx) => (
                  <Grid item xs={12} md={6} key={idx}>
                    <Card className="course-card">
                      <div
                        className="course-image"
                        style={{ backgroundImage: `url(${course.src})` }}
                      ></div>
                      <CardContent className="course-content">
                        <Typography variant="h6" className="course-title">
                          {course.title}
                        </Typography>
                        <Typography variant="body2" className="course-description">
                          {course.description}
                        </Typography>
                        <a href="/course-details" className="learn-more-link">
                          Explore course
                        </a>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </Container>
        <Footer /> 
      </CoursesContainer>
    </ThemeProvider>
  );
}

export default Courses;
