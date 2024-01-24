const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const User = require("../models/userModel");
//transport
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

exports.sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const user = await User.create({ name, email, msg });
    //email matter
    transporter.sendMail({
      to: "soumip777@gmail.com",
      from: "soumi.paul@hih7.com",
      subject: "Reargind mern portfolio app",
      html: `
            <h5>Detail information</h5>
            <ul>
            <li><p>Name : ${name}</p></li>
            <li><p>Name : ${email}</p></li>
            <li><p>Name : ${msg}</p></li>
            </ul>`,
    });

    return res.status(200).send({
      success: true,
      message: "Your message send successfully",
      user,
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).send({
      success: false,
      message: "send email api error",
      error,
    });
  }
};
