const sendEmail = require("./emailConfig.js");

const emailData = {
  subject: "Regex",
  title: "Note:",
  //website: "",
  receiver: {
    name: "",
    email: "",
  },
  text: "This is a test email. Thank you for understanding!",
};


async function start() {
  try {
    console.log("sending email ...");
    // the function that sends the email
    await sendEmail(emailData, "./template.pug");
    console.log("email has been sent!");
  } catch (e) {
    console.log("An error has occured!");
    console.error(e);
  }
}

start();