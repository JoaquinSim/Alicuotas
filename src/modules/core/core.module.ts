import {Global, Module} from '@nestjs/common';
import { coreProviders } from './providers/core.providers';
import { CataloguesController } from './controllers/catalogue.controllers';
import { CataloguesService } from './services/catalogues.service';
import { TimeController } from './controllers/time.controller';
import { TimeDetailController } from './controllers/time-detail.controller';
import { TimeService } from './services/time.services';
import { TimeDetailService } from './services/time-detail.service';
import { LoteService } from './services/lote.service';
import { LoteController } from './controllers/lote.controllers';
import { PDFService } from './services/pdf.service';
import { PDFController } from './controllers/pdf.controller';

@Global()
@Module({
    imports: [
    ],
    controllers: [CataloguesController, TimeController, TimeDetailController, LoteController, PDFController],
    providers: [...coreProviders, CataloguesService, TimeService, TimeDetailService, LoteService, PDFService],
    exports: [ CataloguesService, TimeService, TimeDetailService, LoteService, PDFService],
})
export class CoreModule {
}