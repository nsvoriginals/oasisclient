import React from 'react';
import { Box, Typography, Grid, Paper, IconButton, Toolbar, AppBar, Button } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
   <Box>
    
     <AppBar
              position="static"
              sx={{
                background: 'transparent',
                boxShadow: 'none',
                marginTop: '20px',
              }}
            >
              <Toolbar
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Logo and Title */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <img src="./public/logo.png" alt="logo" style={{ height: '40px', width: '40px' }} />
  
  {/* Link wrapping Typography to navigate to '/' */}
  <Link to="/" style={{ textDecoration: 'none' }}>
    <Typography variant="h5" sx={{ textAlign: 'center', color: 'black', fontSize: '50px', paddingTop: '10px' }}>
      OASIS
    </Typography>
  </Link>
</Box>
    
                {/* Navbar Links */}
                <Box sx={{ display: 'flex', gap: '20px', textAlign: 'center' }}>
                  <Link to="/features" style={{ textDecoration: 'none' }}>
                    <Typography variant="body1" sx={{ fontSize: '30px', color: 'black' }}>
                      Features
                    </Typography>
                  </Link>
                  <Link to="/about" style={{ textDecoration: 'none' }}>
                    <Typography variant="body1" sx={{ fontSize: '30px', color: 'black' }}>
                      About
                    </Typography>
                  </Link>
                  <Link to="/docs" style={{ textDecoration: 'none' }}>
                    <Typography variant="body1" sx={{ fontSize: '30px', color: 'black' }}>
                      Docs
                    </Typography>
                  </Link>
                </Box>
    
                {/* Login and Register Buttons */}
                <Box sx={{ display: 'flex', gap: '15px' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#8C51FE',
                      color: 'white',
                      paddingX: '20px',
                      paddingY: '10px',
                      borderRadius: '8px',
                    }}
                    onClick={() => console.log('Navigating to login')}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#8C51FE',
                      color: 'white',
                      paddingX: '20px',
                      paddingY: '10px',
                      borderRadius: '8px',
                    }}
                    onClick={() => console.log('Navigating to register')}
                  >
                    Register
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '50px 20px',
        minHeight: '100vh',
        fontFamily: 'Heming',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: '105px',
            color: '#8c51fe',
          }}
        >
          Welcome to Our Vision of the Future!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'black',
            textAlign:'center',
            marginTop: '20px',
            fontSize: '50px',
            fontWeight:'bold'
          }}
        >
          A Metaverse built to gamify virtual collaborations, designed with
          innovation and passion.
        </Typography>
      </Box>

      {/* Project Overview */}
      <Box
        sx={{
          marginBottom: '50px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: '80px',
            marginBottom: '20px',
            color: '#8c51fe',
          }}
        >
          About the Project
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '28px',
            lineHeight: '1.6',
            color: 'black',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          This platform revolutionizes how people collaborate in virtual spaces
          by making interactions engaging, efficient, and gamified. Designed
          with cutting-edge technology, our metaverse bridges the gap between
          virtual and real-life teamwork.
        </Typography>
      </Box>

      {/* About the Creators */}
      <Box sx={{ marginBottom: '50px' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: '60px',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#8c51fe',
          }}
        >
          Meet the Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              name: 'Jayanth',
              role: 'Tile Mapping & Phaser',
              description:
                'Jayanth leads the charge with groundbreaking ideas and ensures every step aligns with our vision.',
            },
            {
              name: 'Pruthvidhar Reddy',
              role: 'Frontend Development',
              description:
                'Pruthvidhar lays the foundation with robust architectures, turning concepts into reality.',
            },
            {
              name: 'Sheshi Vardhan',
              role: 'Backend Development & State Management',
              description:
                'NSVOriginals adds life to the project, ensuring every detail feels intuitive and immersive.',
            },
          ].map((creator, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: '30px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  marginTop:'50px'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 'bold', color: '#8c51fe', marginBottom: '10px' ,fontSize:'35px',letterSpacing: '0.02em'}}
                >
                  {creator.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontStyle: 'italic', color: 'black',fontSize:'25px', marginBottom: '10px' ,fontWeight:'bold', lineHeight: 1.8,letterSpacing: '0.02em'}}
                >
                  {creator.role}
                </Typography>
                <Typography variant="body2" sx={{ color: 'black',fontSize:'20px'}}>
                  {creator.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Social Media Links */}
      <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: '30px',
            marginBottom: '20px',
            color: '#8c51fe',
          }}
        >
          Connect with Us
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/sheshivardhan34/"
            target="_blank"
            sx={{ color: '#0e76a8' }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/nsvoriginals"
            target="_blank"
            sx={{ color: '#333' }}
          >
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://x.com/SheshiVardhan34"
            target="_blank"
            sx={{ color: '#1DA1F2' }}
          >
            <Twitter fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          marginTop: '50px',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#8c51fe',
          color: '#fff',
          borderRadius: '10px',
        }}
      >
        <Typography variant="body1">
          Thank you for being part of our journey into the future!
        </Typography>
      </Box>
    </Box>
   </Box>
  );
};

export default About;
