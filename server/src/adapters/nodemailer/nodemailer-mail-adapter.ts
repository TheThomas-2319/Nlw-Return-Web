import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b45ba9ab6ab590",
      pass: "beddf1243ce21b"
    }
  });

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe feedget <oi@feedback.com>',
            to: 'Thomas Porcides <thomas.porcides42@gmail.com>',
            subject: subject,
            html: body,
            })
    };
}