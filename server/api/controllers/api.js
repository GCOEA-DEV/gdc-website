const axios = require('axios');
const nodemailer = require('nodemailer');
const developers = require('../../database/database').developers;

// TODO
// Mailing service

// @route /api/developers
// Get all Developers
const getAllDevs = (req, res, next) => {
  // Get all developers
  // console.log(developers);
  res.status(200).json(developers);
};

const getAllProjects = async (req, res, next) => {
  try {
    let response = await axios.get(
      'https://api.github.com/users/GCOEA-DEV/repos'
    );
    // console.log(response);
    if (response.status === 200) {
      // let projects = await response.json();
      // console.log(response['data']);
      let projects = response['data'];
      res.status(200).json(projects);
    }
    // console.log(projects);
    // let projects = JSON.stringify(response);
    // res.status(200).send(projects);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Internal Error');
  }
};

// @route POST /api/mail
// @desc Send user a link to workspace
const mailUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email || !name.trim() || !email.trim()) {
    return res.status(400).send('Bad Request');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: email,
    subject: 'Invitation to join GDC',
    html: `Hey ${name}, Thanks for joining Gcoea Developer's Club`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({ message: 'Response recorded!' });
    }
  });
};

module.exports = {
  getAllDevs,
  getAllProjects,
  mailUser,
};
