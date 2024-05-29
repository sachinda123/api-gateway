const nodemailer = require("nodemailer");
const randomize = require("randomatic");

module.exports = {
  sendEmail: async (templateName: string, email: string) => {
    return new Promise((resolve, reject) => {
      const code = randomize("000000", 6);
      let subject: string = "";
      let html: string = "";

      switch (templateName) {
        case "sign_up":
          subject = "Sign up password";
          html = `<p>This is passwod for login</p><h3>${code}</h3> 
          <div> Please kindly reset your password after login</div>`;
          break;
        case "reset_password":
          subject = "reset your login password";
          html = `<p>This is new passwod for login</p><h3>${code}</h3> 
          <div> Please kindly reset your password after login</div> `;
          break;
        default:
      }

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
        subject: subject,
        html: html,
      };
      transporter.sendMail(mailOptions, function (error: Error, info: Response) {
        if (error) {
          reject(error);
        } else {
          resolve({ info, code });
        }
      });
    });
  },
};
