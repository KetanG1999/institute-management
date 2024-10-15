import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

const MiddleSection = () => {
  const info = [
    {
      title: 'Our Programs',
      description: 'We offer comprehensive programs in AI, Machine Learning, and Data Science, designed to equip students with the latest industry knowledge.',
      image: '/img/programs.png.jpg', // Local image for Programs
    },
    {
      title: 'Faculty Excellence',
      description: 'Our faculty members are leaders in their fields, with extensive experience in academic research and industry practices.',
      image: '/img/faculty.png.jpg', // Local image for Faculty
    },
    {
      title: 'State-of-the-Art Labs',
      description: 'Our labs provide cutting-edge technology and resources for research and innovation in AI and related fields.',
      image: '/img/lab.png.jpg', // Local image for Labs
    },
  ];

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Our Institute
      </Typography>
      <Grid container spacing={4}>
        {info.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={item.title}
                height="200"
                image={item.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MiddleSection;
