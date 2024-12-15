import React from 'react';
import { Box, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, AppBar, Toolbar, Button } from '@mui/material';
import { Code, Group, VideogameAsset, Layers, Build } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Docs: React.FC = () => {
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
                backgroundColor: '#f8f9fa',
                minHeight: '100vh',
                padding: '40px 20px',
                fontFamily: 'Heming',

            }}
        >
            {/* Page Header */}
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center',
                    fontSize: '50px',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    color: '#8c51fe',
                }}
            >
                OASIS Documentation
            </Typography>

            <Grid container spacing={4}>
                {/* Introduction */}
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '30px',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#8c51fe' }}>
                            Introduction
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '18px', color: 'black' }}>
                            OASIS is a Virtual Reality platform where users can collaborate with remote teams and individuals
                            through an interactive web interface and gaming experience, revolutionizing the way people interact
                            remotely. This platform offers immersive, shared virtual spaces for meetings, workshops, and more.
                        </Typography>
                    </Paper>
                </Grid>

                {/* Features */}
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '30px',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', color: 'black' }}>
                            Features
                        </Typography>
                        <List sx={{ color: 'black' }}>
                            {[
                                { icon: <VideogameAsset />, text: 'Gamified Virtual Environments' },
                                { icon: <Group />, text: 'Immersive Collaboration Spaces' },
                                { icon: <Code />, text: 'Real-Time Multiplayer Functionality' },
                                { icon: <Layers />, text: 'Interactive Web Interface' },
                            ].map((feature, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon sx={{ color: 'black' }}>{feature.icon}</ListItemIcon>
                                    <ListItemText primary={feature.text} />
                                </ListItem>
                            ))}
                        </List>

                    </Paper>
                </Grid>

                {/* Team */}
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '30px',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#8c51fe' }}>
                            Meet the Team
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '18px', color: 'black' }}>
                            The OASIS platform was created by three talented friends, combining their skills to deliver this
                            groundbreaking project:
                        </Typography>
                        <Divider sx={{ margin: '20px 0' }} />
                        <Typography variant="body1" sx={{ fontSize: '18px', marginBottom: '5px', color: 'black' }}>
                            <strong>K. Pruthvi Reddy</strong> - 23BD1A053N
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '18px', marginBottom: '5px', color: 'black' }}>
                            <strong>Jayanth Diddi</strong> - 23BD1A052X
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '18px', color: 'black' }}>
                            <strong>N. Sheshi Vardhan</strong> - 24BD5A0506
                        </Typography>
                    </Paper>
                </Grid>

                {/* Technologies Used */}
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '30px',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#8c51fe' }}>
                            Technologies Used
                        </Typography>
                        <List>
                            {[
                                { text: 'JavaScript/TypeScript', description: 'Used on both client and server sides for modern development.' },
                                { text: 'Phaser 3', description: 'Game engine for immersive environments.' },
                                { text: 'Colyseus', description: 'Real-time multiplayer WebSocket framework.' },
                                { text: 'React/Redux', description: 'For UI management and state handling.' },
                                { text: 'PeerJS', description: 'WebRTC library for video and screen sharing.' },
                                { text: 'Docker', description: 'Containerization for streamlined deployment.' },
                            ].map((tech, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon sx={{ color: 'black' }}>
                                        <Build />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={tech.text}
                                        secondary={tech.description}
                                        primaryTypographyProps={{ fontWeight: 'bold', color: 'black',fontSize:'30px' }}
                                        secondaryTypographyProps={{ color: 'black' ,fontSize:'20px'}}
                                    />
                                </ListItem>
                            ))}
                        </List>

                    </Paper>
                </Grid>
            </Grid>
        </Box>
      
          </Box>
    );
};

export default Docs;
