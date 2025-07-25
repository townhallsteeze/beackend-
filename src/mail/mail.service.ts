import { Injectable } from '@nestjs/common';
import { SendMailDto } from './mail.type';
import { MailerService } from '@nestjs-modules/mailer';
import { json } from 'stream/consumers';
@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendmail(body: SendMailDto) {
    console.log(body);
    const sendMail = await this.mailerService.sendMail({
      from: body.from,
      to: 'Humphreyheather03@gmail.com',
      subject: 'Application Form',
      text: JSON.stringify(body.data),
    });
    console.log(sendMail);
    return sendMail;
  }
}
