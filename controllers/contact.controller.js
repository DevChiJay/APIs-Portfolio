const transporter = require("../config/mailer");

function isEmpty(value) {
  return !value || value.trim() === "";
}

const contactUs = async (req, res, next) => {
  const enteredData = req.body;

  const contactOptions = {
    from: `"${enteredData.fullName}" <alert@1kcapital.org>`,
    to: enteredData.sendTo, // list of receivers
    subject: `${enteredData.subject} - [Contact Form]`,
    html: `<div
    style="
      font-family: open sans;
      font-size: 1rem;
      margin: 3rem auto;
      padding: 2rem;
      width: 32rem;
      color: #302f2f;
      border: 1px solid #cac7c7;
      border-radius: 1px;
      box-shadow: 1px 1px #888888;
    "
  >
    <h2 style="text-align: center">Message From Site Contact Us Form</h2>
    <p><strong>Sender: </strong>${enteredData.fullName} - ${enteredData.email}</p>
    <p><strong>Subject: </strong>${enteredData.subject}</p>
    <p>${enteredData.message}</p>
  </div>
  `, // html body
  };
  try {
    if (
      isEmpty(enteredData.fullName) ||
      isEmpty(enteredData.email) ||
      isEmpty(enteredData.message)
    ) {
      return res.status(400).json({
        message:
          "Please check your input. Be sure to provide a valid email, subject and message",
        status: "invalid",
      });
    }
    await transporter.sendMail(contactOptions);
    return res
      .status(200)
      .json({ message: "Message sent successfully!", status: "success" });
  } catch (error) {
    return next(error);
  }
};

module.exports = contactUs;
