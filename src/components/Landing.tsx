import React from 'react';
import { Button, Box, Typography, AppBar, Toolbar } from '@mui/material';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Features from './Features';
import Docs from './Docs';
import About from './About';

// Styled Button
const StartButton = styled(Button)`
  padding: 15px 30px;
  background-color: #8c51fe;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6a3bcf;
  }
`;

const Landing: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <Box
      sx={{
        height: '400vh',
        width: '100vw',
        fontFamily: 'Heming',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
      }}
    >
      {/* Navbar */}
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
              <Typography
                variant="h5"
                sx={{ textAlign: 'center', color: 'black', fontSize: '50px', paddingTop: '10px' }}
              >
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

      {/* Landing Hero Section with Animation */}
      <motion.div
        id="hero"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '110px',
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            fontSize: '150px',
            lineHeight: 1.2,
            width: '90vw',
          }}
        >
          Virtual spaces <br />
          <span style={{ color: '#8C51FE', fontSize: '175px' }}>Re-imagined for</span> <br />
          collaborations
        </Typography>

        <Typography variant="h4" sx={{ color: 'black', marginTop: '50px', fontSize: '24px' }}>
          Connect. Create. Collaborate
        </Typography>
        <Typography variant="h3" sx={{ color: 'black', fontSize: '14px' }}>
          Anywhere
        </Typography>
        <StartButton
          onClick={onStart}
          sx={{
            marginTop: '80px',
            fontSize: '18px',
            textTransform: 'none',
            backgroundColor: '#8C51FE',
            color:'white'
          }}
        >
          Start Room
        </StartButton>
      </motion.div>

      {/* Additional Content Section with Animation */}
      <motion.div
        id="extra-content"
        style={{
          width: '100%',
          flex: 1,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h5">Additional Content Here</Typography>
      </motion.div>
    </Box>
  );
};

export default Landing;
