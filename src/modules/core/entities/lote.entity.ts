import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { CatalogueEntity } from './catalogue.entity';
import { TimeDetailEntity } from './time-detail.entity';
import { UserEntity } from '@auth/entities';
import { TimeEntity } from './time.entity';

@Entity('lote')
export class LoteEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
      })
      createdAt: Date;
    
      @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
      })
      updatedAt: Date;
    
      @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: false,
      })
      deletedAt: Date;
      
    @Column()
    number: number;

    @ManyToOne(() => TimeEntity, {eager:true})
    @JoinColumn({name: 'time_id'})
    time: TimeEntity;
    @Column({type: 'uuid', name: 'time_id', comment: 'time'})
    timeId: string;

    @ManyToOne(() => UserEntity, {eager:true})
    @JoinColumn({name: 'user_id'})
    user: UserEntity;
    @Column({type: 'uuid', name: 'user_id', comment: 'Usario '})
    userId: string;
}