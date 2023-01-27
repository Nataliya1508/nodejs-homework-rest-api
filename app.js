const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const sgMail = require("@sendgrid/mail");

require('dotenv').config();

const { SENGRID_API_KEY } = process.env;

sgMail.setApiKey(SENGRID_API_KEY);

const email = {
  to: "yikoka6339@webonoid.com",
  from: "Natalykhoroshun1508@gmail.com",
  subject: "Veryfy email",
  html: `<p>Veryfy email</p>`
};

sgMail.send(email)
  .then(() => console.log("Email send succes"))
  .catch(error => console.log(error.message))

const authRouter = require('./routes/api/auth');
const contactsRouter = require('./routes/api/contacts');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/api/auth', authRouter)
app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(500).json({ message: err.message })
})

module.exports = app
