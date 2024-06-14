
const nodemailer = require("nodemailer");
require("dotenv").config();

async function main() {
  
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.user_email,
      pass: process.env.user_password,
    },
  });


  let info = await transporter.sendMail({
    from: process.env.user_email,
    to: "jaithri21@gmail.com",
    cc:["jaithri21@gmail.com"],
    subject: "A test email",
    text: "Testing app",
    attachments: [
      {
        filename: 'Roja',
        path: '/home/jxk01/Web Dev/Email/images/roja.jpeg'
      }
    ]
  });

  return info;
}

module.exports = main;