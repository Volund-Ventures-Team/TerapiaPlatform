import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, Grid, Box, Paper, Avatar } from '@mui/material';
import { Assignment, Visibility, Favorite, Star } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import Footer from './Footer'; // Import Footer component

const teamMembers = [
  { name: 'Dr.Oussama', role: 'Médecin', image: '/doct.jpeg' },
  { name: 'Dr.Mustapha', role: 'Médecin', image: '/doct1.jpeg' },
  { name: 'Dr.Taha ', role: 'Médecin', image: '/doct2.jpeg' },
  { name: 'Dr.Zakaria ', role: 'Médecin', image: '/doct4.jpeg' },
  { name: 'Dr.Youness', role: 'Médecin', image: '/doct5.jpeg' },
  { name: 'Dr.Ilyas', role: 'Médecin', image: '/doct3.jpeg' },
];

const clinicImages = [
  '/therapy.webp.webp',
  '/clinic2.webp.webp',
  '/clinic3.webp.webp',
  '/clinic4.webp.webp',
];

const About = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, marginTop: '2rem', paddingBottom: '4rem' }}>
        {/* About Us Section */}
        <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom align="center" color="#007bff" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
            Welcome to our therapy center. We are dedicated to providing the best mental health services to our patients. Our team of experienced professionals is here to support you in your journey to better mental health and well-being.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
            Our clinic was founded on the principles of empathy, compassion, and excellence. We believe that everyone deserves access to high-quality mental health services, and we strive to make our services accessible to everyone.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
            Thank you for choosing our clinic. We look forward to serving you.
          </Typography>
        </Box>

        {/* Carousel Section */}
        <Carousel
          autoPlay={true}
          animation="slide"
          indicators={true}
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
          navButtonsProps={{
            style: {
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 50,
            }
          }}
          indicatorContainerProps={{
            style: {
              marginTop: '10px',
            }
          }}
        >
          {clinicImages.map((image, index) => (
            <Box key={index} display="flex" justifyContent="center">
              <img src={image} alt={`Clinic ${index + 1}`} style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }} />
            </Box>
          ))}
        </Carousel>

        {/* Mission, Vision, Values, and Why Choose Us Section */}
        <Box sx={{ marginTop: '2rem' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="center" mb={2}>
                <Assignment sx={{ color: '#007bff', fontSize: 'xxx-large' }} />
                <Typography variant="h5" gutterBottom color="#007bff" sx={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>
                  Our Mission
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                Our mission is to provide exceptional healthcare services in a compassionate and caring environment. We are committed to continuous improvement and innovation in the delivery of healthcare.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="center" mb={2}>
                <Visibility sx={{ color: '#007bff', fontSize: 'xxx-large' }} />
                <Typography variant="h5" gutterBottom color="#007bff" sx={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>
                  Our Vision
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                Our vision is to be a leading healthcare provider, known for our commitment to patient-centered care and excellence in clinical practice.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="center" mb={2}>
                <Favorite sx={{ color: '#007bff', fontSize: 'xxx-large' }} />
                <Typography variant="h5" gutterBottom color="#007bff" sx={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>
                  Our Values
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                At our clinic, we prioritize empathy, respect, and professionalism in all our interactions with patients. We believe in holistic care that addresses both the physical and emotional needs of our patients.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="center" mb={2}>
                <Star sx={{ color: '#007bff', fontSize: 'xxx-large' }} />
                <Typography variant="h5" gutterBottom color="#007bff" sx={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>
                  Why Choose Us?
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                Our clinic offers state-of-the-art facilities and a team of highly skilled professionals dedicated to providing personalized care. We use the latest medical technology and evidence-based practices to ensure the best outcomes for our patients.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Team Members Section */}
        <Box sx={{ marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom align="center" color="#007bff" sx={{ fontWeight: 'bold' }}>
            Notre équipe
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
            En collaboration avec toute l’équipe paramédicale, les médecins animent, au quotidien,
            les différents pôles de la clinique et assurent la qualité des soins et le confort des patients.
          </Typography>
          <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <Paper elevation={2} sx={{ padding: '1rem', borderRadius: '15px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, backgroundColor: 'rgba(211, 211, 211, 0.3)' }}>
                  <Avatar
                    alt={member.name}
                    src={member.image}
                    sx={{
                      width: '150px',
                      height: '150px',
                      marginBottom: '1rem',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>{member.name}</Typography>
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'bold' }}>
                    {member.role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

About.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default About;
