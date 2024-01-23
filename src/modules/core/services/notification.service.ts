// notification.service.ts
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, OnApplicationBootstrap  } from '@nestjs/common';
import * as schedule from 'node-schedule';
import { TimeDetailService } from './time-detail.service';
import { LoteService } from './lote.service';
import { UsersService } from '@auth/services';

@Injectable()
export class NotificationService implements OnApplicationBootstrap  {
    pay: Boolean;
    constructor(private readonly loteService: LoteService, private userService: UsersService) {
      
    }
    onApplicationBootstrap() {
    this.scheduleAutomaticNotification();
  }

  private async scheduleAutomaticNotification() {

    const user =  (await this.userService.findAll()).data
    const user1 = user.find((user) => {
      return user.identification === '1705681953';
    });

    const lote =  (await this.loteService.findAll()).data
    const lote1 = lote.find((time) => {
      return time.user.id === '36ec2dab-28f3-424a-aa7c-35e196a1277d';
    });

    
    if(lote1.time.detail.pay == false){
      this.pay = false
    }else{
      this.pay = true
    }

    const futureDate = new Date(); // Puedes ajustar la fecha según tus necesidades

    const job = schedule.scheduleJob(futureDate, () => {
      console.log(`Notificación programada automáticamente para ${futureDate}: ¡Notificación automática!`);

      // Aquí puedes agregar la lógica de envío de la notificación (por ejemplo, enviar un correo electrónico, etc.)
      
    });
    
    if(futureDate.getDate() == 21 && this.pay === false){
      console.log('Estimado ', user1.name, user1.lastname , 'Recuerde que debe cancelar su alicuota del mes de ', lote1.time.detail.mounth.name, 'de su lote con numero', lote1.number, 'el valor a pagar es ', lote1.time.detail.mount)
    }

  }
}
