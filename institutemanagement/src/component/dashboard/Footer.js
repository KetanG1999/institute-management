import React from 'react';
import { Box, Grid, IconButton, Typography, Link } from '@mui/material';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        padding: '20px 0',
        position: 'relative',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -5px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          {/* Social Media Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '15px',
              mb: 4,
            }}
          >
            {/* Facebook */}
            <IconButton
              href="https://www.facebook.com/"
              sx={{ backgroundColor: '#3b5998', color: 'white', '&:hover': { backgroundColor: '#3b5998' } }}
            >
              <FaFacebookF />
            </IconButton>

            {/* Twitter */}
            <IconButton
              href="https://x.com/__x"
              sx={{ backgroundColor: '#55acee', color: 'white', '&:hover': { backgroundColor: '#55acee' } }}
            >
              <FaTwitter />
            </IconButton>

            {/* Google */}
            <IconButton
              href="https://google.com/"
              sx={{ backgroundColor: '#dd4b39', color: 'white', '&:hover': { backgroundColor: '#dd4b39' } }}
            >
              <FaGoogle />
            </IconButton>

            {/* Instagram */}
            <IconButton
              href="https://www.instagram.com/"
              sx={{ backgroundColor: '#ac2bac', color: 'white', '&:hover': { backgroundColor: '#ac2bac' } }}
            >
              <FaInstagram />
            </IconButton>

            {/* Linkedin */}
            <IconButton
              href="https://linkedin.com/"
              sx={{ backgroundColor: '#0082ca', color: 'white', '&:hover': { backgroundColor: '#0082ca' } }}
            >
              <FaLinkedinIn />
            </IconButton>

            {/* Github */}
            <IconButton
              href="https://github.com/"
              sx={{ backgroundColor: '#333333', color: 'white', '&:hover': { backgroundColor: '#333333' } }}
            >
              <FaGithub />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box sx={{ textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.05)', padding: '10px' }}>
        <Typography variant="body2" color="textSecondary">
          © 2020 Copyright:{' '}
          <Link href="https://mdbootstrap.com/" color="inherit">
            MDBootstrap.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
