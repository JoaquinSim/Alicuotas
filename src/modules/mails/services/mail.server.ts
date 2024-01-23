const SMTPServer = require('smtp-server').SMTPServer;
const nodemailer = require('nodemailer');

// Configuración del servidor SMTP
const smtp = new SMTPServer({
  secure: false,
  authOptional: true,
  onData(stream, session, callback) {
    let data = '';
    stream.on('data', (chunk) => {
      data += chunk.toString();
    });

    stream.on('end', () => {
      console.log('Correo recibido:');
      console.log(data);

      // Aquí puedes realizar la lógica que desees con el correo recibido
      // Por ejemplo, puedes reenviarlo utilizando nodemailer

      const transporter = nodemailer.createTransport({
        host: 'smtp.tu-servidor-smtp.com',
        port: 587,
        secure: false,
        auth: {
          user: 'tu-usuario',
          pass: 'tu-contraseña',
        },
      });

      const mailOptions = {
        from: 'tu-usuario@tu-dominio.com',
        to: 'destinatario@otro-dominio.com',
        subject: 'Correo reenviado',
        text: 'Este es el correo reenviado:\n\n' + data,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log('Error al reenviar el correo:', error);
        }
        console.log('Correo reenviado:', info.response);
      });

      callback();
    });
  },
});

// Inicia el servidor en el puerto 25 (puedes cambiarlo según tus necesidades)
smtp.listen(25, 'localhost', () => {
  console.log('Servidor SMTP escuchando en el puerto 25');
});


module.exports = smtp;