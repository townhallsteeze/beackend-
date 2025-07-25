import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [MailModule,MailerModule.forRoot({
    transport: {
     service:'Gmail',
      auth: {
        user: 'humphreyheather03@gmail.com',
        pass: 'sezwuqgeafganlbh',
      },
    },
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
