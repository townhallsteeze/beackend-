import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
