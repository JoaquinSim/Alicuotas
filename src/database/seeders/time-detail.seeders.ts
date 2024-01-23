import { Injectable } from '@nestjs/common';
import { CreateTimeDetailDto } from 'src/modules/core/dto/time-datail/time-detail-create.dto';
import { TimeDetailService } from 'src/modules/core/services/time-detail.service';
import { CataloguesService } from '../../modules/core/services/catalogues.service';

@Injectable()
export class DetailSeeder {
  constructor(
    private detailService: TimeDetailService,
    private cataloguesService: CataloguesService,
  ) {}
  async run() {
    await this.createDetail();
  }

  private async createDetail() {
    //Meses
    const mounth = (await this.cataloguesService.findAll()).data;

    const enero = mounth.find((mes) => {
      return mes.name === 'Enero';
    });

    const febrero = mounth.find((mes) => {
      return mes.name === 'Febrero';
    });

    const marzo = mounth.find((mes) => {
      return mes.name === 'Marzo';
    });

    const abril = mounth.find((mes) => {
      return mes.name === 'Abril';
    });

    const mayo = mounth.find((mes) => {
      return mes.name === 'Mayo';
    });

    const junio = mounth.find((mes) => {
      return mes.name === 'Junio';
    });

    const julio = mounth.find((mes) => {
      return mes.name === 'Julio';
    });

    const agosto = mounth.find((mes) => {
      return mes.name === 'Agosto';
    });

    const septiembre = mounth.find((mes) => {
      return mes.name === 'Septiembre';
    });

    const octubre = mounth.find((mes) => {
      return mes.name === 'Octubre';
    });

    const noviembre = mounth.find((mes) => {
      return mes.name === 'Noviembre';
    });

    const diciembre = mounth.find((mes) => {
        return mes.name === 'Diciembre' ;
      });
      
    const diciembre1 = mounth.find((mes) => {
      return mes.name === 'Diciembre' && mes.sort === 1;
    });
    const diciembre2 = mounth.find((mes) => {
      return mes.name === 'Diciembre' && mes.sort === 2;
    });
    const diciembre3 = mounth.find((mes) => {
      return mes.name === 'Diciembre' && mes.sort === 3;
    });
    const catalogues: CreateTimeDetailDto[] = [];
    catalogues.push(
      {
        mounth: diciembre1,
        mount: 0,
        pay: false,
        code: '1',
      },
      {
        mounth: diciembre2,
        mount: 0,
        pay: false,
        code: '2',
      },
      {
        mounth: diciembre3,
        mount: 0,
        pay: false,
        code: '3',
      },
      {
        mounth: enero,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: febrero,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: marzo,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: abril,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: mayo,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: junio,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: julio,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: agosto,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: septiembre,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: octubre,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: noviembre,
        mount: 0,
        pay: false,
        code: '4',
      },
      {
        mounth: diciembre,
        mount: 0,
        pay: false,
        code: '4',
      },
      //{
      //     mounth: enero,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: febrero,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: marzo,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: abril,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: mayo,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: junio,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: julio,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: agosto,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: septiembre,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: octubre,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: noviembre,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: diciembre,
      //     mount: 0,
      //     pay: false,
      //     code: '5',
      //   },
      //   {
      //     mounth: enero,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: febrero,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: marzo,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: abril,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: mayo,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: junio,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: julio,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: agosto,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: septiembre,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: octubre,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: noviembre,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: diciembre,
      //     mount: 0,
      //     pay: false,
      //     code: '6',
      //   },
      //   {
      //     mounth: enero,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: febrero,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: marzo,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: abril,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: mayo,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: junio,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: julio,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: agosto,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: septiembre,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: octubre,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: noviembre,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: diciembre,
      //     mount: 0,
      //     pay: false,
      //     code: '7',
      //   },
      //   {
      //     mounth: enero,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: febrero,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: marzo,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: abril,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: mayo,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: junio,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: julio,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: agosto,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: septiembre,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: octubre,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: noviembre,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: diciembre,
      //     mount: 0,
      //     pay: false,
      //     code: '8',
      //   },
      //   {
      //     mounth: enero,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: febrero,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: marzo,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: abril,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: mayo,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: junio,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: julio,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: agosto,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: septiembre,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: octubre,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: noviembre,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
      //   {
      //     mounth: diciembre,
      //     mount: 0,
      //     pay: false,
      //     code: '9',
      //   },
    );

    for (const catalogue of catalogues) {
      await this.detailService.create(catalogue);
    }
  }
}
