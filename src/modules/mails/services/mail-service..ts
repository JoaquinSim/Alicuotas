import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { LoteService } from 'src/modules/core/services/lote.service';
import { UsersService } from '@auth/services';
import { LoteDto } from 'src/modules/core/dto/lote/lote.dto';
import { UserDto } from '@auth/dto';
import { CataloguesService } from 'src/modules/core/services/catalogues.service';
import { CatalogueDto } from 'src/modules/core/dto/catalogue/catalogue.dto';

@Injectable()
export class MailService {
  pay: Boolean;
  userId: string;
  constructor(
    private readonly mailerService: MailerService,
    private loteService: LoteService,
    private userService: UsersService,
    private catalogueService: CataloguesService,
  ) {}

  async example(): Promise<void> {
    const user = (await this.userService.findAll()).data as UserDto[];
    const lote = (await this.loteService.findAll()).data as LoteDto[];
    const catalogue = (await this.catalogueService.findAll())
      .data as CatalogueDto[];
    const lote1 = lote.find((time) => {
      if (time.time.detail.pay.name === 'Sin pagar') {
        this.mailerService
          .sendMail({
            to: time.user.email, // list of receivers
            from: 'noreply@nestjs.com', // sender address
            subject: 'Pago de alicuotas', // Subject line
            text: `Estimado ${time.user.name}`,
            html: `Estimado ${time.user.name}, se le recuerda que tiene el pago pendiente de su alicuota de su lote ${time.number} con el monto a pagar de ${time.time.detail.mount} del mes ${time.time.detail.mounth.name}`
          })
          .then(() => {})
          .catch(() => {});
        this.userId = time.user.id;
      }
    });

    const user1 = user.find((user) => {
      return user.id === this.userId;
    });
  }
}
