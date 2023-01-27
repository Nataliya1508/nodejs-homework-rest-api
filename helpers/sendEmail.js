const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENGRID_API_KEY } = process.env;

sgMail.setApiKey(SENGRID_API_KEY);

// const data = {
//     to: "yikoka6339@webonoid.com",
//     subject: "Veryfy email",
//     html: `<p>Veryfy email</p>`
// };

const sendEmail = async (data) => {
    try {
        const email = { ...data, from: "Natalykhoroshun1508@gmail.com" };
        await sgMail.send(email);
        return true; 
    } catch (error) {
        error(error.message)
    }
   
}

module.exports = sendEmail;