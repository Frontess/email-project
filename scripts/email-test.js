const fs = require("fs");
const nodemailer = require("nodemailer");

async function sendTestEmail() {
  const htmlContent = fs.readFileSync("../index.html", "utf8");

  let transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: "your-email@example.com",
      pass: "your-password",
    },
  });

  let info = await transporter.sendMail({
    from: '"Сладкий Мир" <your-email@example.com>',
    to: "recipient@example.com",
    subject: "Добро пожаловать в Сладкий Мир!",
    html: htmlContent,
  });

  console.log(`Письмо успешно отправлено: ${info.messageId}`);
}

sendTestEmail().catch(console.error);
