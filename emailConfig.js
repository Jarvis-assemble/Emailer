// include pug module
const pug = require("pug");
const nodemailer = require("nodemailer");
require("dotenv").config();

async function main(emailData, pugTemplatePath) {
  
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.user_email,
      pass: process.env.user_password,
    },
  });

  // Compile a Pug template from a file to a function
  const compiledFunction = pug.compileFile(pugTemplatePath);
  // Render the function
  const emailHTML = compiledFunction(emailData);
/*
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
*/
 let info = await transporter.sendMail({
    from: process.env.user_email,
    to: emailData.receiver.email,
    subject: emailData.subject,
    // send the email as an html
    html: emailHTML,
  });

  return info;
}

module.exports = main;