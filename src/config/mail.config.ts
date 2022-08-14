import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";


async function main() {
  const hostname = "smtp.gmail.com";
  const email= process.env.GMAILACCOUNT;
  const password= process.env.PASSWORDGMAIL ;

  const transporter = nodemailer.createTransport({
    service:'gmail',
    host: hostname,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: email,
      pass: password,
    },
    logger: true
  });

  const setTemplate = (name:string, token:string) =>{
    return `
    <head>
      <link rel="stylesheet" href="./style.css">
    </head>
  
    <div id="email___content">
      <h2>Hola ${name}</h2>
      <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
      <a
          href="http://localhost:4000/api/user/confirm/${token}"
          target="_blank"
      >Confirmar Cuenta</a>
    </div>
    `;
  }
  

  const sendEmail = async (email:string, subject:string, html:any) =>{
    try {
      const info = await transporter.sendMail({
        from: `CodeTester <${email}>`,
        to: email,
        subject,
        text: "This is your verification token",
        html,
        headers: { 'x-myheader': 'test header' }
      });
      
    } catch (error) {
        console.log(`Error sending email: ${error}`);
    }
  }


}

export default main;
