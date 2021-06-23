const { createTransport } = require('nodemailer');

const { config } = require('../../config');

const { templateService } = require('../template-service');

const kVerifyPromise = Symbol('verifyPromise');

class MailService {
  constructor() {
    this.connected = false;

    this.transporter = createTransport({
      host: config.mailer.server.host,
      port: config.mailer.server.port,
      auth: {
        user: config.mailer.auth.user,
        pass: config.mailer.auth.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async checkConnection() {
    if (this.connected) {
      return;
    }

    if (this[kVerifyPromise] === undefined) {
      this[kVerifyPromise] = this.transporter.verify();
    }

    await this[kVerifyPromise];

    delete this[kVerifyPromise];

    this.connected = true;
  }

  async send(options) {
    await this.checkConnection();

    const sendMailOptions = {
      from: options.sender || config.mailer.auth.user,
      to: options.reciever || config.mailer.bussinesEmail,
      subject: options.subject,
      html: options.message,
    };

    if (options.attachments !== undefined) {
      sendMailOptions.attachments = options.attachments;
    }

    return this.transporter.sendMail(sendMailOptions);
  }

  async sendTemplate({ template, ...sendOptions }) {
    const message = await templateService.render(template);

    return this.send({ ...sendOptions, message });
  }
}

exports.MailService = MailService;

const mailService = new MailService();

exports.mailService = mailService;
