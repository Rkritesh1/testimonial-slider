const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Dummy testimonial data
const testimonials = [
  {
    image: 'client_1.jpp',
    name: 'Ritesh Kinge',
    feedback: 'This service is amazing! Highly recommend.',
    rating: 5
  },
  {
    image: 'client_2.jpg',
    name: 'Sonu Kumar',
    feedback: 'Very reliable and professional.',
    rating: 3
  },
  {
    image: 'client_3.jpg',
    name: 'Harish Nale',
    feedback: 'The experience was fantastic! Will be back for more.',
    rating: 5
  },
  {
    image: 'client_4.jpg',
    name: 'Harish Chaudhri',
    feedback: 'Affordable pricing and great quality.',
    rating: 5
  },
  {
    image: 'client_5.jpg',
    name: 'Kishore Suralkar',
    feedback: 'Quick delivery and excellent customer support.',
    rating: 4
  }
];

app.get('/', (req, res) => {
  res.render('index', { testimonials: testimonials });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
