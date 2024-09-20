import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Starfield from './Components/Starfield'; 
import {
  Container,
  Typography,
  Grid,
  Paper,
  CssBaseline,
  Card,
  CardContent,
  Button,
  Avatar,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Home.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E88E5',
    },
    secondary: {
      main: '#1E88E5',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

const productImages = [
  { src: '/stress.webp', title: 'Stress and Burn out', description: 'Immediate psychological support for managing stress or burnout.' },
  { src: '/sleep.webp', title: 'Sleep', description: "Finally get a good night's sleep with Welcome Therapy's online sleep course." },
  { src: '/panic.webp', title: 'Panic', description: 'The effective online therapy course for anxiety and panic attacks.' },
  { src: '/viginismus.webp', title: 'Vaginismus Plus', description: 'Your online therapy course to reduce pain during penetration or sex.' },
  { src: '/chronic.webp', title: 'Chronic Pain', description: 'Your online therapy course for a better quality of life and coping with chronic pain.' },
  { src: '/diabetes.webp', title: 'Diabetes', description: 'Your online therapy course to manage the mental health impact of diabetes.' },
];

const services = [
  { src: '/individual.jpg.webp', title: 'Individual Therapy', description: 'Personalized one-on-one therapy sessions.' },
  { src: '/group.jpg.webp', title: 'Group Therapy', description: 'Support and therapy in a group setting.' },
  { src: '/family.jpg.webp', title: 'Family Therapy', description: 'Therapy sessions for family members together.' },
  { src: '/online.jpg.webp', title: 'Online Counseling', description: 'Virtual therapy sessions from the comfort of your home.' },
];

const teamMembers = [
  { name: 'Dr.Oussama ', role: 'Doctor', image: '/doct.jpeg' },
  { name: 'Dr.Mustapha', role: 'Doctor', image: '/doct1.jpeg' },
  { name: 'Dr.Taha', role: 'Doctor', image: '/doct3.jpeg' },
  /*{ name: 'Zakaria Sabti', role: 'Doctor', image: '/zakaria.jpeg' },
  { name: 'Youness', role: 'Doctor', image: '/younes.jpeg' },
  { name: 'Rafik Ilyas', role: 'Manager', image: '/ouss.jpeg' },*/
];

const servicesOptions = [
  { value: 'consultation', label: 'Consultation' },
  { value: 'therapy', label: 'Therapy Session' },
  { value: 'followup', label: 'Follow-up' },
];

const AppointmentForm = () => (
  <ThemeProvider theme={theme}>
    <Container 
      maxWidth="md" 
      sx={{ 
        backgroundColor: '#e3f2fd', 
        padding: '2rem', 
        borderRadius: '16px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
        mt: 4, 
        mb: 4 
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
  Make an appointment!
</Typography>
<Grid container spacing={3} justifyContent="center" alignItems="center">
  <Grid item xs={12} md={6}>
    <TextField fullWidth label="Your full name" variant="outlined" margin="normal" />
    <TextField fullWidth label="Telephone number" variant="outlined" margin="normal" />
    <TextField
      fullWidth
      select
      label="Select a service"
      variant="outlined"
      margin="normal"
    >
      {servicesOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      fullWidth
      label="Date"
      variant="outlined"
      type="date"
      InputLabelProps={{ shrink: true }}
      margin="normal"
    />
    <TextField
      fullWidth
      label="Hour"
      variant="outlined"
      type="time"
      InputLabelProps={{ shrink: true }}
      margin="normal"
    />
    <TextField
      fullWidth
      label="Message"
      variant="outlined"
      multiline
      rows={4}
      margin="normal"
    />
    <Button
  fullWidth
  variant="contained"
  style={{
    marginTop: '16px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    textTransform: 'none',
    fontWeight: 'bold'
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#0056b3'; // Darker shade on hover
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#007bff'; // Revert back to original color
  }}
>
  Send
</Button>

  </Grid>
</Grid>

    </Container>
  </ThemeProvider>
);

const HowItWorks = () => (
  <ThemeProvider theme={theme}>
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        mt: 4,
        mb: 4
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{
          fontWeight: 'bold',
          color: theme.palette.primary.main,
          marginBottom: '1rem',
        }}
      >
        How does Welcome to Therapy Platform work?
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{
          color: '#555',
          maxWidth: '600px',
          margin: '0 auto 2rem',
          fontSize: '1.2rem',
          lineHeight: '1.5',
        }}
      >
        Our online courses help with mental health concerns such as stress, depression, panic attacks, or trouble sleeping.
      </Typography>

      <div style={{ position: 'relative' }}>
        <div style={{ width: '2px', backgroundColor: '#1E88E5', position: 'absolute', top: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)' }}></div>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={5} style={{ textAlign: 'right' }}>
            <div>
              <img src="./course.webp" alt="Step 1" style={{ width: '100px', marginBottom: '1rem' }} />
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>Choose a course</Typography>
              <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold' }}>
                Find a course that suits you and your needs. Choose between 10 online courses for prevention or treatment.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ backgroundColor: '#1E88E5', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)' }}>
              1
            </div>
          </Grid>
          <Grid item xs={5} style={{ textAlign: 'left' }}>
            <div></div>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={5} style={{ textAlign: 'left' }}>
            <div></div>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ backgroundColor: '#1E88E5', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)' }}>
              2
            </div>
          </Grid>
          <Grid item xs={5} style={{ textAlign: 'left' }}>
            <div>
              <img src="./support.webp" alt="Step 2" style={{ width: '100px', marginBottom: '1rem' }} />
              <Typography variant="h5"style={{ fontWeight: 'bold' }}>Get professional support</Typography>
              <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold' }}>
                No matter which course you choose: A qualified psychologist or psychotherapist will accompany you throughout the entire course.
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={5} style={{ textAlign: 'right' }}>
            <div>
              <img src="./start.webp" alt="Step 3" style={{ width: '100px', marginBottom: '1rem' }} />
              <Typography variant="h5"style={{ fontWeight: 'bold' }}>Start Your Journey</Typography>
              <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold' }}>
                Begin your personalized therapy journey with expert guidance and support every step of the way.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ backgroundColor: '#1E88E5', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)' }}>
              3
            </div>
          </Grid>
          <Grid item xs={5} style={{ textAlign: 'left' }}>
            <div></div>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={5} style={{ textAlign: 'left' }}>
            <div></div>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ backgroundColor: '#1E88E5', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)' }}>
              4
            </div>
          </Grid>
          <Grid item xs={5} style={{ textAlign: 'left' }}>
            <div>
              <img src="./track.webp" alt="Step 4" style={{ width: '100px', marginBottom: '1rem' }} />
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>Track Your Progress</Typography>
              <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold' }}>
                Monitor your progress throughout the course and adjust your approach as needed to achieve the best results.
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={5} style={{ textAlign: 'right' }}>
            <div>
              <img src="./complete.webp" alt="Step 5" style={{ width: '100px', marginBottom: '1rem' }} />
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>Complete the Course</Typography>
              <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold' }}>
                Finish your course and enjoy the positive changes in your mental well-being.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ backgroundColor: '#1E88E5', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)' }}>
              5
            </div>
          </Grid>
          <Grid item xs={5} style={{ textAlign: 'left' }}>
            <div></div>
          </Grid>
        </Grid>
      </div>
    </Container>
  </ThemeProvider>
);

function Home({ user }) {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSupportDialog, setOpenSupportDialog] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState('');

  const [showForm, setShowForm] = useState(false);

  const handleSeeMoreProducts = () => {
    if (user) {
      navigate('/videocourses');
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleSeeMoreServices = () => {
    if (user) {
      navigate('/services');
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleOpenSupportDialog = () => {
    setOpenSupportDialog(true);
  };

  const handleCloseSupportDialog = () => {
    setOpenSupportDialog(false);
    setShowForm(false);
    setSelectedIssue('');
  };

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
    setShowForm(true);
  };
  

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Starfield className="starfield-background" />
      <div className="home-container">
        <section id="welcome" className="home-section welcome-section">
          <h1>Welcome to Therapy Platform</h1>
          <p>Your one-stop solution for CBT tests, video courses, and more.</p>
        </section>

        <section id="products" className="home-section products-section">
        <Typography
  variant="h4"
  align="center"
  gutterBottom
  style={{
    fontWeight: 'bold',
    color: '#007bff', 
    marginBottom: '1rem',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', 
  }}
>
  Our Courses
</Typography>
<Typography
  variant="body1"
  align="center"
  style={{
    color: '#B0BEC5', // Slightly darker blue for better readability
    maxWidth: '600px',
    margin: '0 auto 2rem',
    fontSize: '1.2rem',
    lineHeight: '1.5',
    fontWeight: 'bold', // Make the text bold
  }}
>
  Mental health support when you need it – for free and on demand.
  Get our courses on prescription and covered by health insurances. 
  Find the right course for you:
</Typography>



  <div className="products-list">
    {productImages.map((product, index) => (
      <div className="product-card" key={index}>
        <div
  className="product-image"
  style={{ backgroundImage: `url(${product.src})` }}
></div>

        <div className="product-content">
          <Typography variant="h6" component="div" className="product-title">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="product-description">
            {product.description}
          </Typography>
        </div>
      </div>
    ))}
  </div>

  <Grid container justifyContent="center" style={{ marginTop: '2rem' }}>
    <Button  style={{ backgroundColor: '#007bff', color: 'white' }} variant="contained"  color="primary" onClick={handleSeeMoreProducts}>
      See More
    </Button>
  </Grid>
  
</section>
        <section id="services" className="home-section services-section">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              marginBottom: '1rem',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            Our Services
          </Typography>
          <Typography
  variant="body1"
  align="center"
  style={{
    color: '#B0BEC5',
    maxWidth: '600px',
    margin: '0 auto 2rem',
    fontSize: '1.2rem',
    lineHeight: '1.5',
    fontWeight: 'bold', // Make the text bold
  }}
>
  Explore our range of therapy services designed to meet your specific needs.
</Typography>

          <div className="services-list">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
               <div
  className="service-image"
  style={{ backgroundImage: `url(${service.src})` }}
></div>

                <div className="service-content">
                  <Typography variant="h6" component="div" className="service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="service-description">
                    {service.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <Grid container justifyContent="center" style={{ marginTop: '2rem' }}>
            <Button  style={{ backgroundColor: '#007bff', color: 'white' }} variant="contained" color="primary" onClick={handleSeeMoreServices}>
              See More
            </Button>
          </Grid>
        </section>

        <section id="how-it-works" className="home-section how-it-works-section">
          <HowItWorks />
        </section>

        <section id="appointment" className="home-section appointment-section">
          <AppointmentForm />
        </section>

        <section id="about" className="home-section about-section">
  <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
    <Paper
      elevation={3}
      sx={{
        padding: '2rem',
        textAlign: 'center',
        borderRadius: '15px',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0)' // No background color for the section
      }}
    >
      <Typography variant="h4" gutterBottom color="primary">
        Our Team
      </Typography>
      <Typography
  variant="body1"
  paragraph
  style={{ fontWeight: 'bold' }} // Make the text bold
>
  In collaboration with the entire paramedical team, the doctors lead the different departments of the clinic and ensure the quality of care and patient comfort.
</Typography>

      <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <Paper
              elevation={2}
              sx={{
                padding: '1rem',
                borderRadius: '15px',
                transition: 'transform 0.3s',
                backgroundColor: 'white', // Card background in white
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Avatar
                alt={member.name}
                src={member.image}
                sx={{
                  width: '150px',
                  height: '150px',
                  marginBottom: '1rem',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Typography variant="h6">{member.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {member.role}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  </Container>
</section>


      </div>
    </ThemeProvider>
  );
}
export default Home;