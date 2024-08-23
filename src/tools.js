import React from 'react';
import { Container, Box, Typography, Button, AppBar, Toolbar, Grid, Paper, Chip } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import ToolIcon from '@mui/icons-material/Build';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#013A17',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h4: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Open Sans, sans-serif',
    },
  },
});

const tools = [
  {
    name: 'Business Structure Recommender',
    description: 'Get recommendations on the best structure for your business based on specific criteria.',
    route: '/business-structure-recommender',
    status: 'available', // Status can be 'available' or 'coming soon'
  },
  {
    name: 'Automatic Legal Documents Generator',
    description: 'Automatically generate documents for legal purposes based on your jurisdictional provisions.',
    route: '/other-tool',
    status: 'coming soon',
  },
];

const ToolsPage = ({ onNavigate }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ padding: '20px' }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <ToolIcon style={{ marginRight: '10px' }} />
            <Typography variant="h6">Tools Dashboard</Typography>
          </Toolbar>
        </AppBar>

        <Box mt={4} mb={2}>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
            Available Tools
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={3} 
                style={{ 
                  padding: '20px', 
                  textAlign: 'center', 
                  minHeight: '300px', // Ensures uniform size
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <BusinessIcon color={tool.status === 'available' ? 'primary' : 'secondary'} style={{ fontSize: 50 }} />
                <Typography variant="h6" gutterBottom>
                  {tool.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {tool.description}
                </Typography>
                <Chip 
                  label={tool.status === 'available' ? 'Available' : 'Coming Soon'} 
                  color={tool.status === 'available' ? 'primary' : 'secondary'}
                  style={{ marginBottom: '15px' }} 
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => onNavigate(tool.route)} 
                  disabled={tool.status === 'coming soon'}
                >
                  {tool.status === 'available' ? 'Open Tool' : 'Coming Soon'}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ToolsPage;
