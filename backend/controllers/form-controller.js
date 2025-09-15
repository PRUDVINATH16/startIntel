const nodemailer = require('nodemailer');

exports.sendSurvey = async (req, res) => {
  try {
    const { idea, mobile } = req.body;

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
        <a href="http://localhost:5500/idea-form.html?idea=${idea}">Link to Fill Form</a>
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