import {Injectable} from '@nestjs/common';
import * as fs from 'fs';
import {join} from 'path';
import { CataloguesSeeder } from './catalogue.seeders';
import { DetailSeeder } from './time-detail.seeders';
import { TimeSeeder } from './time-seeder';
import { UserSeeder } from './user.seeders';
import { LoteSeeder } from './lote.seeders';

@Injectable()
export class DatabaseSeeder {
    constructor(
        private userSeeder: UserSeeder,
        private cataloguesSeeder: CataloguesSeeder,
        private detailSeeder: DetailSeeder,
        private timeSeeder:TimeSeeder,
        private loteSeeder:LoteSeeder
    ) {
    }

    async run() {
        await this.userSeeder.run()
        await this.cataloguesSeeder.run();
        await this.detailSeeder.run()
        await this.timeSeeder.run()
        await this.loteSeeder.run()
    }
}