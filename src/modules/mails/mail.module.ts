import {Global, Module} from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Global()
@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
              host: 'smtp.gmail.com',
              port: 465,
              ignoreTLS: true,
              secure: false,
              auth: {
                user: 'joaquin050416@gmail.com',
                pass: 'Nerviozzoylocus',
              },
            },
            defaults: {
              from: '"No Reply" <no-reply@localhost>',
            },
            preview: true,
            template: {
              dir: process.cwd() + '/template/',
              adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
              options: {
                strict: true,
              },
            },
          }),
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class MailModule {
}


