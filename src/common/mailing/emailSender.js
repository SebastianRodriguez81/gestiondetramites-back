import nodemailer from "nodemailer";

function createEmailSender(user, pass) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  return {
    send: async (emailOptions) => {
      let info = await transporter.sendMail(emailOptions);
    },
  };
}

export { createEmailSender };
