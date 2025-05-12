const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const app = express();

// Load environment variables from a .env file
dotenv.config();

app.use(cors());

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS, etc.) from the HTML folder
app.use(express.static('HTML')); // Update to relative path

// GET route to serve your form HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/HTML/index.html'); // Make sure this points to the correct file
});

// POST route to handle form submission
app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phone, contactMethod, tripSelect, travelDatesStart, travelDatesEnd, adults, children, specialNeeds } = req.body;

  // Set up Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Environment variable used
    to: process.env.EMAIL_USER,   // Use the same for recipient's email address
    replyTo: email,               // The email address that will receive replies
    subject: 'New Booking Inquiry',
    text: `
      New Booking Inquiry Details from User: ${email}:
      -------------------
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Preferred Contact: ${contactMethod}
      Trip: ${tripSelect}
      Travel Dates: ${travelDatesStart} - ${travelDatesEnd}
      Adults: ${adults}
      Children: ${children}
      Special Needs / Requirements / Questions: ${specialNeeds || 'None'}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email.');
    } else {
      console.log('Email sent: ' + info.response);
      // Redirect to the confirmation page after a successful email send
      res.redirect('https://crossroadsadventure.earth/confirmation.html');
    }
  });
});

// Health check endpoint for Kubernetes
app.get('/health', (req, res) => res.send('OK'));

// Start the server (port managed by Vercel)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
