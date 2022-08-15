import nodemailer from "nodemailer";

class Service {
  private hostname = "smtp.gmail.com";
  private email = process.env.GMAILACCOUNT;
  private password = process.env.PASSWORDGMAIL;

  private transporter = nodemailer.createTransport({
    service:'gmail',
    host: this.hostname,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: this.email,
        pass: this.password,
    },
    logger: true
  });

  public setTemplate = (name: string, token: string): string =>{
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
  };
    

  public sendEmail = async (email: string, subject: string, html: any) =>{
    try {
      const info = await this.transporter.sendMail({
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
  };
}

export const MailService = new Service();