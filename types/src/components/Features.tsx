import React, { useEffect } from 'react';
import { Box, Typography, Grid, Paper, Button, Toolbar, AppBar } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const featureData = [
    {
        title: 'Chat System',
        description:
            'Our Chat System allows users to communicate seamlessly with others in real time. Whether for casual conversations or professional discussions, this feature provides a smooth and efficient chat experience.',
    },
    {
        title: 'Virtual Gamification',
        description:
            'Engage users in a fun and interactive way with Virtual Gamification. By incorporating game-like elements, users can experience a more immersive and engaging platform.',
    },
    {
        title: 'Voice Over',
        description:
            'The Voice Over feature allows hands-free communication, providing an intuitive way to interact with the platform using just your voice, ensuring accessibility and convenience.',
    },
    {
        title: 'Video Conferencing',
        description:
            'Video Conferencing allows real-time face-to-face communication, making it perfect for meetings, discussions, and team collaborations across distances.',
    },
    {
        title: 'Screen Sharing & Collaborative Tools',
        description:
            'With Screen Sharing and Collaborative Tools, users can share their screen, edit documents, and collaborate in real time, boosting productivity and teamwork.',
    },
];

const Features: React.FC = () => {
    useEffect(() => {
        // ScrollTrigger animation
        featureData.forEach((_, index) => {
            gsap.fromTo(
                `.feature-${index}`,
                { opacity: 0, x: -200 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: `.feature-${index}`,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                    },
                }
            );
        });
    }, []);

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
                    backgroundColor: '#fff',
                    padding: '50px 20px',
                    fontFamily: 'Heming',
                    minHeight: '100vh',
                }}
            >

                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        fontSize: '120px',
                        fontFamily: 'Heming',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        color: '#8c51fe',
                    }}
                >
                    Features
                </Typography>

                <Grid container spacing={4} direction="column">
                    {featureData.map((feature, index) => (
                        <Grid
                            item
                            xs={12}
                            className={`feature-${index}`}
                            sx={{
                                marginBottom: '50px', // Spacing between features
                                width: '100%',
                            }}
                            key={index}
                        >
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: '40px 20px', // Larger padding for better spacing
                                    backgroundColor: 'white',
                                    borderRadius: '10px',
                                    boxShadow: 'none',
                                    width: '100%', // Make it full width
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '350px', // Ensure a consistent card height
                                }}
                            >
                                {/* Feature Title */}
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'black', // Primary color for headings
                                        marginBottom: '15px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {feature.title}
                                </Typography>

                                {/* Feature Description */}
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: 'black', // Black for description text
                                        textAlign: 'center',
                                        maxWidth: '900px', // Adjust width for readability
                                        fontSize: '40px',
                                        lineHeight: '1.6',
                                    }}
                                >
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box /></Box>
    );
};

export default Features;
