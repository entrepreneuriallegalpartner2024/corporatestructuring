import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Typography,
  Select,
  FormControl,
  InputLabel,
  Box,
  Paper,
  CircularProgress,
  AppBar,
  Toolbar
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import countries from './countries.json'; // Import the JSON file
import businessStructures from './businessStructures'; // Import the JavaScript module
import { recommendStructure } from './utils'; // Import the utility function
import ToolsPage from './tools'; // Assuming you have a ToolsPage component
import LoadingScreen from './LoadingScreen'; // Import the loading screen component
import Collapse from '@mui/material/Collapse';

const theme = createTheme({
  palette: {
    primary: {
      main: '#013A17',
    },
    secondary: {
      main: '#013A17',
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



const BusinessStructureRecommender = () => {
  const [country, setCountry] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [owners, setOwners] = useState('');
  const [intentionToMakeProfits, setIntentionToMakeProfits] = useState('');
  const [management, setManagement] = useState('');
  const [funding, setFunding] = useState('');
  const [liability, setLiability] = useState('');
  const [profitSharing, setProfitSharing] = useState('');
  const [sellBondsShares, setSellBondsShares] = useState('');
  const [loading, setLoading] = useState(true);
  const [showManagementSection, setShowManagementSection] = useState(false);
  const [showFundingSection, setShowFundingSection] = useState(false);
  const [showProfitSharingSection, setShowProfitSharingSection] = useState(false);
  const [showSellBondsSharesSection, setShowSellBondsSharesSection] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const managementOptions = {
    'Only one individual will own and operate the business.': [
      'The business will be managed solely by the owner.',
      'Management will be handled by a board of directors or elected members.'
    ],
    'More than one individual will own and operate the business.': [
      'Management will be distributed equally among the partners.',
      'Management will be distributed among the partners based on specific agreements.',
      'Management will be done democratically by all members.',
      'Management will be handled by a board of directors or elected members.'
    ]
  };

  const profitSharingOptions = {
    'Only one individual will own and operate the business.': [
      'The sole owner will retain all profits.',
      'Profits will be distributed based on the usage of services by members.'
    ],
    'More than one individual will own and operate the business.': [
      'Profits will be shared equally among multiple owners.',
      'Profits will be distributed based on shares owned by the shareholders.',
      'Profits will be shared according to the agreement between partners.',
      'Profits will be distributed based on the usage of services by members.'
    ]
  };
  const handleTryAnother = () => {
    navigate('/business-structure-recommender'); // Navigate back to the form page
  };
  
  const handleOwnersChange = (e) => {
    const selectedOwners = e.target.value;
    setOwners(selectedOwners);
    setShowManagementSection(true);
    setShowProfitSharingSection(intentionToMakeProfits === 'Yes' && selectedOwners !== 'Only one individual will own and operate the business.');
  };

  const handleIntentionToMakeProfitsChange = (e) => {
    const selectedIntention = e.target.value;
    setIntentionToMakeProfits(selectedIntention);

    setShowFundingSection(selectedIntention === 'Yes');
    setShowProfitSharingSection(selectedIntention === 'Yes' && owners !== 'Only one individual will own and operate the business.');
    setShowSellBondsSharesSection(selectedIntention === 'Yes');
  };

  const handleRecommendation = () => {
    setLoading(true);
    setTimeout(() => {
      const bestStructure = recommendStructure(
        businessStructures,
        intentionToMakeProfits,
        owners,
        liability,
        management,
        profitSharing,
        funding,
        sellBondsShares
      );
  
      // Convert the recommendation object to a string
      const recommendationString = bestStructure
      ? `${bestStructure.name}. Major Advantage:\n ${bestStructure.majorAdvantage}.Major Disadvantage: ${bestStructure.majorDisadvantage}.`
      : 'No recommendation available.';
  
      setLoading(false);
      navigate('/recommendation', {
        state: { 
          recommendation: recommendationString, 
          country: country // Pass the country data here
        }
      });
    }, 3000);
  };


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" style={{ padding: '20px' }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <BusinessIcon style={{ marginRight: '10px' }} />
            <Typography variant="h6">Business Structure Recommender</Typography>
          </Toolbar>
        </AppBar>

        <Box mt={4} mb={2}>
          <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', textAlign: 'center' }}>
            Choose Your Business Path
          </Typography>
        </Box>

        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#e0f7fa' }}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Country</InputLabel>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              label="Country"
            >
              {countries.map((c, index) => (
                <MenuItem key={index} value={c}>{c}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Type of Business (max 5 words)"
              variant="outlined"
              value={businessType}
              onChange={(e) => {
                const input = e.target.value;
                const words = input.trim().split(/\s+/);
                if (words.length <= 5) {
                  setBusinessType(input);
                }
              }}
              placeholder="e.g., law firm, independent contractor, freelancer, investment SACCO"
              fullWidth
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Ownership Structure</InputLabel>
            <Select
              value={owners}
              onChange={handleOwnersChange}
              variant="outlined"
            >
              <MenuItem value="Only one individual will own and operate the business.">Only one individual will own and operate the business.</MenuItem>
              <MenuItem value="More than one individual will own and operate the business.">More than one individual will own and operate the business.</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Does your business aim to generate profits for its owners or stakeholders?</InputLabel>
            <Select
              value={intentionToMakeProfits}
              onChange={handleIntentionToMakeProfitsChange}
              variant="outlined"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>

          {showManagementSection && (
            <FormControl fullWidth margin="normal">
              <InputLabel>Who will manage the business?</InputLabel>
              <Select
                value={management}
                onChange={(e) => setManagement(e.target.value)}
                variant="outlined"
              >
                {managementOptions[owners]?.map((option, index) => (
                  <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {showFundingSection && (
            <FormControl fullWidth margin="normal">
            <InputLabel>How do you intend to fund your business?</InputLabel>
            <Select
              value={funding}
              onChange={(e) => setFunding(e.target.value)}
              variant="outlined"
            >
           <MenuItem value="Funding will come from personal savings.">Funding will come from personal savings.</MenuItem>
              <MenuItem value="Funding will come from contributions made by the business partners or members.">Funding will come from contributions made by the business partners or members.</MenuItem>
              <MenuItem value="Funding will be acquired through a combination of member contributions and loans.">Funding will be acquired through a combination of member contributions and loans.</MenuItem>
              <MenuItem value="Funding will come from the sale of stocks or shares.">Funding will be obtained by selling shares or stocks.</MenuItem>
              <MenuItem value="Funding will mostly come from donations and grants">Funding will mostly come from donations and grants</MenuItem>
            </Select>
          </FormControl>
          )}

          {showProfitSharingSection && (
            <FormControl fullWidth margin="normal">
              <InputLabel>How will profits be shared?</InputLabel>
              <Select
                value={profitSharing}
                onChange={(e) => setProfitSharing(e.target.value)}
                variant="outlined"
              >
                {profitSharingOptions[owners]?.map((option, index) => (
                  <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <Collapse in={true}> {/* Show or hide based on your logic */}
  <FormControl fullWidth margin="normal">
    <InputLabel>Suppose your business runs into debt and you owe a client who is suing you to get her money back, what's the most desirable way you want to do this?</InputLabel>
    <Select
      value={liability}
      onChange={(e) => setLiability(e.target.value)}
      variant="outlined"
    >
      <MenuItem value="Pay the client from my own personal finances and even if the money is not enough, I will sell my assets to raise the money - Personal/ Unlimited Liability">
        Pay the client from my own personal finances and even if the money is not enough, I will sell my assets to raise the money - Personal/ Unlimited Liability
      </MenuItem>
      <MenuItem value="Share the costs with my partners and each of us will put our personal finances together to ensure the debt is fully settled - Joint Personal/ Unlimited Liability">
        Share the costs with my partners and each of us will put our personal finances together to ensure the debt is fully settled - Joint Personal/ Unlimited Liability
      </MenuItem>
      <MenuItem value="Get money from the business account and sell the business assets that we do not need as much until we raise the full amount - Limited Liability">
        Get money from the business account and sell the business assets that we do not need as much until we raise the full amount - Limited Liability
      </MenuItem>
    </Select>
  </FormControl>
</Collapse>

          {showSellBondsSharesSection && (
            <FormControl fullWidth margin="normal">
              <InputLabel>Will you be selling bonds or shares to raise funds?</InputLabel>
              <Select
                value={sellBondsShares}
                onChange={(e) => setSellBondsShares(e.target.value)}
                variant="outlined"
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          )}

          <Box mt={4} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleRecommendation}
              disabled={loading}
            >
              Get Recommendation
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

const RecommendationPage = () => {
  const location = useLocation();
  const { recommendation, country } = location.state || { recommendation: '', country: '' };

  const navigate = useNavigate();

  const handleTryAnother = () => {
    navigate('/business-structure-recommender'); // Navigate back to the form page
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" style={{ padding: '20px' }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <BusinessIcon style={{ marginRight: '10px' }} />
            <Typography variant="h6">Recommendation</Typography>
          </Toolbar>
        </AppBar>

        <Box mt={4} mb={2}>
          <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', textAlign: 'center' }}>
            Your Recommended Business Structure
          </Typography>
        </Box>

        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Based on the information provided, the recommended business structure for your country {country} is:
          </Typography>
          <Typography variant="body1" paragraph>
            {recommendation}
          </Typography>
          <Typography
            variant="body1"
            style={{ marginTop: '20px' }}
          >
            For more information and assistance with registration in {country}, 
            contact ELP. Our team is here to help you navigate the process 
            and ensure compliance with local regulations.
          </Typography>
          <Box mt={3} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleTryAnother}
            >
              Try Another Entry
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

function App() {
  const [loading, setLoading] = useState(false);

  // Function to handle navigation with loading state
  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = path; // Use window.location.href to handle navigation
    }, 5000); // Display loading screen for 5 seconds
  };

  return (
    <Router>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<ToolsPage onNavigate={handleNavigation} />} />
          <Route path="/business-structure-recommender" element={<BusinessStructureRecommender />} />
          <Route path="/recommendation" element={<RecommendationPage />} />
          {/* Add other routes here */}
        </Routes>
      )}
    </Router>
  );
}

export default App;


