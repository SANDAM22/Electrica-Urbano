import nodemailer from 'nodemailer'

export default async function contact(req, res) {
  const { name, email, message } = req.body;

  const data = { name, email, message }

  const user = process.env.user;
  const pass = process.env.pass;


  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'santiyfidel@gmail.com',
      pass: 'fkfa jchk nkib iyhs'
    }
  });
  try {
    const mail = {
      from: user,
      to: 'santiyfidel@gmail.com',
      replyTo: email,
      subject: `Mensaje desde el sitio web`,
      html: `
            <p>Remitente: ${name}</p>
            <p>Email: ${email}</p>
            <p>Mensaje: ${message}</p>
            `



    }
    await transporter.sendMail(mail)
    return res.status(200).json({ message: 'Email enviado exitosamente' })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Hubo un error al enviar tu mensaje"
    })
  }
 


}  

