const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/api/send-email', (req, res) => {
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
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
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

module.exports = app;
