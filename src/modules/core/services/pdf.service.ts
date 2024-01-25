import { Injectable } from '@nestjs/common';
import { LoteService } from './lote.service';
import { UsersService } from '@auth/services';

import { UserEntity } from '@auth/entities';
import { LoteEntity } from '../entities/lote.entity';
import { CataloguesService } from './catalogues.service';
const {PDFDocument} = require('pdfkit-table-ts');


@Injectable()
export class PDFService {
  constructor(private loteService: LoteService, private userService: UsersService, private catalogueService: CataloguesService) {}
  async generatePDF(): Promise<Buffer> {
    //const user = (await this.userService.findAll()).data as UserEntity[];
    const data = (await this.loteService.findAll()).data as LoteEntity[];
    const catalogue = (await this.catalogueService.findAll()).data;

    const pagado = catalogue.find((pay) =>{
      return pay.name === 'Pagado';
    })

    const lote1 = data.find((time) => {
        if (time.time.detail.pay === pagado) {
            return pdfBuffer;
        }
    });
    
    const pdfBuffer: Buffer = await new Promise(resolve => {
      const doc = new PDFDocument({
        size: 'A4',
        bufferPages: true,
        align: 'center',
      });
      const date = new Date()
      //textos
      const matricula = '       Factura:    ';
      const matriculaInfo = date.getDate();
      const matriculaX = 120;
      const folioX = 400;
      const textY = 200;
      const textY2 = 220;

      //Documento
      doc.font('Helvetica-Bold').fontSize(25).text('Alicuota', { align: 'center' }, 160);
      doc.font('Times-Bold', 13);
      doc.text(matricula, matriculaX, textY);
      doc.font('Times-Roman', 13).text(matriculaInfo, matriculaX, textY2);
      doc.moveDown(6);
      doc
        .font('Times-Roman', 13)
        .text(
          `Estimado ${lote1.user.name},`,
          80,
          280,
          { align: 'justify' },
        );
        
      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => {
        const data = Buffer.concat(buffer);
        resolve(data);
      });
      doc.end();
    });



    return pdfBuffer;
  }
}