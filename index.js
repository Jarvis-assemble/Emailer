const sendEmail = require("./emailConfig.js");
 
async function start() {
  try {
    console.log("sending email ...");
    // the function that sends the email
    await sendEmail();
    console.log("email has been sent!");
  } catch (e) {
    console.log("An error has occured!");
    console.error(e);
  }
}

start();