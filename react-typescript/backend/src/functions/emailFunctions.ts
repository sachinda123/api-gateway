const nodemailer = require("nodemailer");
const randomize = require("randomatic");

module.exports = {
  sendEmail: async (templateName: string, email: string) => {
    return new Promise((resolve, reject) => {
      const code = randomize("*", 5);

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "sachinda123@gmail.com",
          pass: "hzcx lbhf fofb ytpe",
        },
      });

      var mailOptions = {
        from: "sachinda123@gmail.com",
        to: `${email}`,
        subject: "Sending Email using Node.js",
        html: `<h1>${code}</h1>`,
      };
      transporter.sendMail(mailOptions, function (error: Error, info: Response) {
        if (error) {
          console.log(error);
        } else {
          resolve(info);
          //   console.log("Email sent: " + info.response);
        }
      });
    });
  },
};
