import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import loadingGif from './assets/wait.gif'; // Ensure this path is correct

const LoadingScreen = () => {
  return (
    <Container
      maxWidth="xs"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative', // Relative position for overlay
        overflow: 'hidden', // Hide overflow
        color: '#ffffff', // White text color for contrast
        padding: 0, // Remove default padding
        margin: 0, // Remove default margin
      }}
    >
      {/* Background Animation */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, rgba(0, 50, 0, 0.5), rgba(0, 100, 0, 0.7))',
          animation: 'backgroundAnimation 10s linear infinite',
          zIndex: 0,
        }}
      >
        <style>
          {`
            @keyframes backgroundAnimation {
              0% {
                background-position: 0% 0%;
              }
              100% {
                background-position: 100% 100%;
              }
            }
          `}
        </style>
      </Box>

      {/* Loading GIF */}
      <img
        src={loadingGif}
        alt="Loading..."
        style={{
          width: '100px',
          height: '100px',
          position: 'relative',
          zIndex: 1, // Ensure GIF is above background
        }}
      />
      
      {/* Loading Text */}
      <Typography
        variant="h6"
        style={{
          marginTop: '20px',
          position: 'relative',
          zIndex: 1, // Ensure text is above background
        }}
      >
        We are collecting tools to assist, we may need some data from you in a bit
      </Typography>
    </Container>
  );
};

export default LoadingScreen;
