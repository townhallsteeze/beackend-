import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendMailDto } from './mail.type';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}
@Post()
 async sendMail(@Body() body:SendMailDto){
     return  this.mailService.sendmail(body)
 }
}
