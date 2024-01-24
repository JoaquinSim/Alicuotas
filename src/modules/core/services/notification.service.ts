// notification.service.ts
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, OnApplicationBootstrap  } from '@nestjs/common';
import * as schedule from 'node-schedule';
import { TimeDetailService } from './time-detail.service';
import { LoteService } from './lote.service';
import { UsersService } from '@auth/services';
import { LoteDto } from '../dto/lote/lote.dto';
import { UserDto } from '@auth/dto';
import { MailService } from '../../mails/services/mail-service.';

@Injectable()
export class NotificationService implements OnApplicationBootstrap  {
    pay: Boolean;
    userId: string;
    constructor(private  loteService: LoteService, private userService: UsersService, private mailService: MailService) {
      
    }
    onApplicationBootstrap() {
    this.scheduleAutomaticNotification();
  }

  private async scheduleAutomaticNotification() {

    const user =  (await this.userService.findAll()).data as UserDto[]
    const lote =  (await this.loteService.findAll()).data as LoteDto[]

    const lote1 = lote.find((time) => {
      if(time.time.detail.pay === false){
        this.userId = time.user.id
        this.pay = time.time.detail.pay
      }
      return time.time.detail.pay === false;
    });

    const user1 = user.find((user) => {
      return user.id === this.userId;
    });
    
    const futureDate = new Date(); 
    futureDate.setSeconds(futureDate.getSeconds() + 5); 

    const job = schedule.scheduleJob(futureDate, () => {
      this.mailService.example()
      // Aqui pones la logica para el envio de correo
      
    });
    
    if(futureDate.getDate() == 23 && this.pay === false){

    }

  }
}
