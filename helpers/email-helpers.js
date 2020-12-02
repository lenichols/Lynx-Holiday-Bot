const nodemailer = require('nodemailer');
// async..await is not allowed in global scope, must use a wrapper
exports.sendEmail = (email, list) => {
  const pairs = list.map(pair => {
    return `<p>=> ${pair[0]} and ${pair[1]}</p>`
  })
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service: 'yahoo',
    secure: false,
    auth: {
      user: "dummydummemail@yahoo.com",
      pass: "nuzafzbmchgxaiwa"
    },
    debug: false,
    logger: true
  });
  const mailOptions = {
    from: '"Secret Santa" <dummydummemail@yahoo.com>', // sender address
    to: email, // list of receivers
    subject: "Your list", // Subject line
    html: `<h1>HERE'S YOUR LIST !!!</h1>\n ${pairs}`, // html body
  }
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err.response);
    else console.log("Email sent:", info.response);
  });
}