const express = require('express'),
  app = express(),
  path = require('path'),
  { sendEmail } = require('./helpers/email-helpers'),
  PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.static("client/build"));
app.use(express.urlencoded({ extended: true }));

/*
@POST route /api/email
desc grabs email and list from body
*/
app.post("/api/email", (req, res) => {
  const { email, list } = req.body;
  sendEmail(email, list);
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
})

app.listen(PORT, () => console.log(`SERVER STARTED ON http://localhost:${PORT}`));