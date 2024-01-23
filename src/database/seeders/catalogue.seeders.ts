import {Injectable} from '@nestjs/common';
import { CataloguesService } from 'src/modules/core/services/catalogues.service';
import { CreateCatalogueDto } from 'src/modules/core/dto/catalogue/create-catalogue.dto';

@Injectable()
export class CataloguesSeeder {
    constructor(private catalogueService: CataloguesService) {
    }
    async run() {
        await this.createMounth();
        await this.createYears();
    }


    private async createMounth() {
        const catalogues: CreateCatalogueDto[] = [];
        catalogues.push(
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 1,
            },
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 2,
            },
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 3,
            },
            {
                code: 'mes',
                name: 'Enero',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Febrero',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Marzo',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Abril',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Mayo',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Junio',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Julio',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Agosto',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Septiembre',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Octubre',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Noviembre',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 4
            },
            {
                code: 'mes',
                name: 'Enero',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Febrero',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Marzo',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Abril',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Mayo',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Junio',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Julio',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Agosto',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Septiembre',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Octubre',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Noviembre',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 5
            },
            {
                code: 'mes',
                name: 'Enero',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Febrero',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Marzo',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Abril',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Mayo',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Junio',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Julio',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Agosto',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Septiembre',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Octubre',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Noviembre',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 6
            },
            {
                code: 'mes',
                name: 'Enero',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Febrero',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Marzo',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Abril',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Mayo',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Junio',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Julio',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Agosto',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Septiembre',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Octubre',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Noviembre',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Enero',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Febrero',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Marzo',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Abril',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Mayo',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Junio',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Julio',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Agosto',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Septiembre',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Octubre',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Noviembre',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 7
            },
            {
                code: 'mes',
                name: 'Enero',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Febrero',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Marzo',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Abril',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Mayo',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Junio',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Julio',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Agosto',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Septiembre',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Octubre',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Noviembre',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 8
            },
            {
                code: 'mes',
                name: 'Enero',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Febrero',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Marzo',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Abril',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Mayo',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Junio',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Julio',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Agosto',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Septiembre',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Octubre',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Noviembre',
                sort: 9
            },
            {
                code: 'mes',
                name: 'Diciembre',
                sort: 9
            },
        );

        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }

    private async createYears() {
        const catalogues: CreateCatalogueDto[] = [];
        catalogues.push(
            {
                code: 'año',
                name: '2014',
                sort: 1,
            },
            {
                code: 'año',
                name: '2016',
                sort: 2,
            },
            {
                code: 'año',
                name: '2017',
                sort: 3,
            },
            {
                code: 'año',
                name: '2018',
                sort: 4,
            },
            {
                code: 'año',
                name: '2019',
                sort: 5,
            },
            {
                code: 'año',
                name: '2020',
                sort: 6,
            },
            {
                code: 'año',
                name: '2021',
                sort: 7,
            },
            {
                code: 'año',
                name: '2022',
                sort: 8,
            },
            {
                code: 'año',
                name: '2023',
                sort: 9,
            },
        );

        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }


}