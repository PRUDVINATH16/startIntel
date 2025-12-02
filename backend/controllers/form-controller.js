const nodemailer = require('nodemailer');
const SurveyResult = require('../models/surveyResults');

exports.sendSurvey = async (req, res) => {
  try {
    const { idea, mobile, encryptedIdea, encryptedMobile } = req.body;

    if (!idea || !mobile) {
      return res.status(400).json({ message: 'Idea and mobile are required' });
    }

    // ✅ Hard-coded recipient list
    const mails = [
      'patnamprudvi3@gmail.com',
      'sharuksharkhussain@gmail.com',
      'starterwave25@gmail.com'
    ];

    // ✅ Create transporter (use env vars in production!)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your SMTP service
      auth: {
        user: process.env.MAIL_USER,  // e.g. your Gmail address
        pass: process.env.MAIL_PASS   // app password or SMTP password
      }
    });

    // ✅ Build email content
    const mailOptions = {
      from: `"StartIntel Survey" <${process.env.MAIL_USER}>`,
      to: mails.join(','), // send to all in array
      subject: `New Survey Idea Submission`,
      html: `
        <h2>New Idea Submitted</h2>
        <p><strong>Idea:</strong> ${idea}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <a href="https://prudvinath16.github.io/startIntel/idea-form.html?idea=${encryptedIdea}&mobile=${encryptedMobile}">Link to Fill Form</a>
      `
    };

    // ✅ Send the email
    await transporter.sendMail(mailOptions);

    return res.json({ message: 'Survey emails sent successfully' });

  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ message: 'Server error sending emails' });
  }
};

exports.sendResult = async (req, res) => {
  try {
    const { name, age, mobile, idea, q1, q2, q3, q4, q5 } = req.body;

    // Validate quickly
    if (!name || !age || !mobile || !idea || !q1 || !q2 || !q3 || !q4 || !q5) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newResult = new SurveyResult({
      name,
      age,
      mobile,
      idea,
      q1,
      q2,
      q3,
      q4,
      q5
    });

    await newResult.save();

    res.status(201).json({ message: 'Survey saved successfully', data: newResult });
  } catch (err) {
    console.error('Error saving survey:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getCustomerReviews = async (req, res) => {
  try {
    const { mobile, idea } = req.body;

    // ✅ Validate input
    if (!mobile || !idea) {
      return res.status(400).json({ message: 'Mobile and idea are required' });
    }

    // ✅ Fetch only surveys matching this mobile and idea
    const reviews = await SurveyResult.find({ mobile, idea }).sort({ createdAt: -1 });

    // ✅ If no reviews found, you can return a message
    if (reviews.length === 0) {
      return res.status(200).json({ message: 'No', data: [] });
    }

    res.status(200).json({ message: 'Yes', data: reviews });

  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};