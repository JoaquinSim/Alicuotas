import { Controller, Get, Res } from '@nestjs/common';
import path = require('path');
import { PDFService } from '../services/pdf.service';

@Controller('pdf')
export class PDFController {
  constructor(private readonly pdfService: PDFService) {

  }
 
  @Get('download')
  async downloadPDF(@Res() res): Promise<void> {
    const buffer = await this.pdfService.generatePDF();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': buffer.length,
    })
    res.end(buffer);
  }
}