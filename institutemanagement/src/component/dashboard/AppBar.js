import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function ButtonAppBar() {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleLogout = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#2c3e50', // Dark slate color
          boxShadow: 'none', // No shadow for a flat look
        }}
      >
        <Toolbar sx={{ position: 'relative', px: 3 }}>
          
          {/* Left side: Menu icon with buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: 0 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
            {/* Navigation Buttons */}
            {['Student', 'Batch', 'Course', 'User'].map((label) => (
              <Button
                key={label}
                sx={{
                  color: '#ecf0f1', // Light color for text
                  mx: 1,
                  fontWeight: '500',
                  textTransform: 'capitalize', // Normal case for buttons
                  '&:hover': {
                    backgroundColor: '#34495e', // Darker slate on hover
                    borderRadius: '4px',
                    transition: '0.3s ease',
                  },
                }}
                onClick={handleLogout}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Centered Institute Name */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: '#ecf0f1', // Light color for title
              fontWeight: '700',
              letterSpacing: '0.1em',
              textAlign: 'center',
              flexGrow: 1,
            }}
          >
            Sky IT Institute
          </Typography>

          {/* Logout Button */}
          <Box sx={{ position: 'absolute', right: 0 }}>
            <Button
              sx={{
                color: '#ecf0f1', // Light color for logout
                backgroundColor: '#e74c3c', // Red for logout button
                fontWeight: 'bold',
                borderRadius: '4px',
                padding: '6px 16px',
                '&:hover': {
                  backgroundColor: '#c0392b', // Darker red on hover
                  transition: '0.3s ease',
                },
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
