// notification.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as schedule from 'node-schedule';
import { MailService } from '../../mails/services/mail-service.';

@Injectable()
export class NotificationService implements OnModuleInit {
  constructor(private mailService: MailService) {}
  onModuleInit() {
    this.executeNotification();
  }
  executeNotification() {
    setInterval(() => {
      this.scheduleAutomaticNotification();
    }, 10000);
  }
  private async scheduleAutomaticNotification() {
    const futureDate = new Date();
    futureDate.setSeconds(futureDate.getSeconds() + 5);

    const job = schedule.scheduleJob(futureDate, () => {
      if (futureDate.getDate() > 15 && futureDate.getDate() < 30) {
        this.mailService.example();
      }
    });
  }
}
