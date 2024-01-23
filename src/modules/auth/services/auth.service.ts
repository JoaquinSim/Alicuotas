import {BadRequestException, Inject, Injectable, NotFoundException, Req, Res, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import * as Bcrypt from 'bcrypt';
import {plainToInstance} from 'class-transformer';
import {Repository} from 'typeorm';
import {add, isBefore} from 'date-fns';
import {UserEntity} from '@auth/entities';
import {AuthRepositoryEnum } from '@shared/enums';
import {ServiceResponseHttpModel} from '@shared/models';
import {UsersService} from '@auth/services';
//import {MailService} from '@common/services';
import {join} from 'path';
import * as fs from 'fs';
import {ConfigType} from "@nestjs/config";
import { LoginDto } from '../dto/auth/login.dto';
import { PayloadTokenModel } from '../models/payload-token.models';
import { TransactionalCodeEntity } from '../entities/transicinal';
import { config } from 'src/config/config';
import { Response } from 'express';

// const {PDFDocument} = require('pdfkit-table-ts');

@Injectable()
export class AuthService {
    private readonly MAX_ATTEMPTS = 3;

    constructor(
        @Inject(AuthRepositoryEnum.USER_REPOSITORY)
        private repository: Repository<UserEntity>,
         //private transactionalCodeRepository: Repository<TransactionalCodeEntity>,
        //  @Inject(config.KEY) private configService: ConfigType<typeof config>,
        // private readonly userService: UsersService,
        private jwtService: JwtService,
        // private readonly nodemailerService: MailService,
        // private readonly schoolPeriodsService: SchoolPeriodsService,
    ) {
    }

    // async changePassword(id: string, payload: PasswordChangeDto): Promise<boolean> {
    //     const user = await this.repository.findOneBy({id});

    //     if (!user) {
    //         throw new NotFoundException('Usuario no encontrado para cambio de contraseña');
    //     }

    //     const isMatchPassword = await this.checkPassword(payload.oldPassword, user);

    //     if (!isMatchPassword) {
    //         throw new BadRequestException('The old password is not match.');
    //     }

    //     if (payload.confirmationPassword !== payload.newPassword) {
    //         throw new BadRequestException('The passwords do not match.');
    //     }

    //     user.password = payload.newPassword;

    //     await this.repository.save(user);

    //     return true;
    // }

    async login(payload: LoginDto): Promise<ServiceResponseHttpModel> {
        const user: UserEntity = (await this.repository.findOne({
            where: {
                email: payload.email,
            },
        })) as UserEntity;

        if (!user || !(await this.checkPassword(payload.password, user))) {
            throw new UnauthorizedException(`Usuario y/o contraseña no válidos`);
        }

        if (!(await this.checkPassword(payload.password, user))) {
            throw new UnauthorizedException(`Usuario y/o contraseña no válidos`);
        }

        const userUpdate = await this.repository.findOne({
            where: {email: payload.email},
            select: {password: false}
        });

        const {password, ...userRest} = userUpdate;


        await this.repository.update(userUpdate.id, userRest);
        const accessToken = this.generateJwt(user);
        return {data: {user, accessToken}};
    }

    async logout() {
      }

    // async findProfile(id: string): Promise<ReadProfileDto> {
    //     const user = await this.repository.findOne({
    //         where: {id},
    //         relations: {
    //             bloodType: true,
    //             ethnicOrigin: true,
    //             identificationType: true,
    //             gender: true,
    //             maritalStatus: true,
    //             sex: true,
    //         },
    //     });

    //     if (!user) {
    //         throw new NotFoundException('El perfil no existe');
    //     }

    //     return plainToInstance(ReadProfileDto, user);
    // }

    // async findUserInformation(id: string): Promise<ReadUserInformationDto> {
    //     const user = await this.repository.findOneBy({id});

    //     if (!user) {
    //         throw new NotFoundException('Información de usuario no existe');
    //     }

    //     return plainToInstance(ReadUserInformationDto, user);
    // }

    // async updateUserInformation(id: string, payload: UpdateUserInformationDto): Promise<ReadUserInformationDto> {
    //     const user = await this.userService.findOne(id);

    //     if (!user) {
    //         throw new NotFoundException('Usuario no encontrado para actualizar información');
    //     }

    //     this.repository.merge(user, payload);
    //     const userUpdated = await this.repository.save(user);

    //     return plainToInstance(ReadUserInformationDto, userUpdated);
    // }

    // async updateProfile(id: string, payload: UpdateProfileDto): Promise<ReadProfileDto> {
    //     const user = await this.repository.findOneBy({id});

    //     if (!user) {
    //         throw new NotFoundException('Usuario no encontrado para actualizar el perfil');
    //     }

    //     const profileUpdated = await this.repository.update(id, payload);

    //     return plainToInstance(ReadProfileDto, profileUpdated);
    // }

    refreshToken(user: UserEntity): ServiceResponseHttpModel {
        const accessToken = this.generateJwt(user);

        return {data: {accessToken, user}};
    }

    

    // async requestTransactionalCode(username: string): Promise<ServiceResponseHttpModel> {
    //     const user = await this.repository.findOne({
    //         where: {username},
    //     });

    //     if (!user) {
    //         throw new NotFoundException({
    //             error: 'Usuario no encontrado para generar código transaccional',
    //             message: 'Intente de nuevo',
    //         });
    //     }
    //     const randomNumber = Math.random();
    //     const token = randomNumber.toString().substring(2, 8);

    //     const mailData: MailDataInterface = {
    //         to: user.email || user.personalEmail,
    //         subject: MailSubjectEnum.RESET_PASSWORD,
    //         template: MailTemplateEnum.TRANSACTIONAL_CODE,
    //         data: {
    //             token,
    //             user,
    //         }
    //     }
    //     await this.nodemailerService.sendMail(mailData);

    //     const payload = {username: user.username, token, type: 'password_reset'};

    //     await this.transactionalCodeRepository.save(payload);

    //     const value = user.email || user.personalEmail;
    //     const chars = 3; // Cantidad de caracters visibles

    //     const email = value.replace(
    //         /[a-z0-9\-_.]+@/gi,
    //         c =>
    //             c.substr(0, chars) +
    //             c
    //                 .split('')
    //                 .slice(chars, -1)
    //                 .map(v => '*')
    //                 .join('') +
    //             '@',
    //     );

    //     return {data: email};
    // }

    // async verifyTransactionalCode(token: string, username: string): Promise<ServiceResponseHttpModel> {
    //     const transactionalCode = await this.transactionalCodeRepository.findOne({
    //         where: {token},
    //     });

    //     if (!transactionalCode) {
    //         throw new BadRequestException({
    //             message: 'Código Transaccional no válido',
    //             error: 'Error',
    //         });
    //     }

    //     if (transactionalCode.username !== username) {
    //         throw new BadRequestException({
    //             message: 'El usuario no corresponde al código transaccional generado',
    //             error: 'Error',
    //         });
    //     }

    //     if (transactionalCode.isUsed) {
    //         throw new BadRequestException({
    //             message: 'El código ya fue usado',
    //             error: 'Error',
    //         });
    //     }

    //     const maxDate = add(transactionalCode.createdAt, {minutes: 10});

    //     if (isBefore(maxDate, new Date())) {
    //         throw new BadRequestException({
    //             message: 'El código ha expirado',
    //             error: 'Error',
    //         });
    //     }

    //     transactionalCode.isUsed = true;

    //     await this.transactionalCodeRepository.save(transactionalCode);

    //     return {data: true};
    // }

    // async resetPassword(payload: any): Promise<ServiceResponseHttpModel> {
    //     const user = await this.repository.findOne({
    //         where: {username: payload.username},
    //     });

    //     if (!user) {
    //         throw new NotFoundException({
    //             message: 'Intente de nuevo',
    //             error: 'Usuario no encontrado para resetear contraseña',
    //         });
    //     }

    //     user.maxAttempts = this.MAX_ATTEMPTS;
    //     user.password = payload.newPassword;
    //     user.passwordChanged = true;

    //     await this.repository.save(user);

    //     return {data: true};
    // }

    // async uploadAvatar(file: Express.Multer.File, id: string): Promise<UserEntity> {
    //     const entity = await this.repository.findOneBy({id});

    //     if (entity?.avatar) {
    //         try {
    //             fs.unlinkSync(join(process.cwd(), 'assets', entity.avatar));
    //         } catch (err) {
    //             console.error('Something wrong happened removing the file', err);
    //         }
    //     }
    //     entity.avatar = `avatars/${file.filename}`;
    //     const {password, ...restEntity} = entity;

    //     return await this.repository.save({...restEntity});
    // }

    private generateJwt(user: UserEntity): string {
        const expiresDate = new Date();

        expiresDate.setDate(expiresDate.getSeconds() + 10);

        const payload: PayloadTokenModel = {id: user.id, iat: new Date().getTime(), exp: expiresDate.getTime()};

        console.log(payload)
        return this.jwtService.sign(payload, {secret: '123'});
    }

    // private async findByUsername(username: string): Promise<UserEntity> {
    //     return (await this.repository.findOne({
    //         where: {
    //             username,
    //         },
    //     })) as UserEntity;
    // }

    private async checkPassword(passwordCompare: string, user: UserEntity): Promise<null | UserEntity> {
        const {password, ...userRest} = user;
        const isMatch = Bcrypt.compareSync(passwordCompare, password);

        if (isMatch) {
            await this.repository.save(userRest);
            return user;
        }

        await this.repository.save(userRest);

        return null;
    }

    // async generatePDF() {
    //     const pdf: Buffer = await new Promise(resolve => {
    //         const doc = new PDFDocument()

    //         doc.text('hello world', 100, 50);

    //         const buffer = [];
    //         doc.on('data', buffer.push.bind(buffer));
    //         doc.on('end', () => resolve(Buffer.concat(buffer)));
    //         doc.end();
    //     });

    //     const mailData: MailDataInterface = {
    //         to: 'cesar.tamayo0204@gmail.com',
    //         subject: MailSubjectEnum.RESET_PASSWORD,
    //         template: MailTemplateEnum.TEST,
    //         data: {
    //             token: 'asd'
    //         },
    //         attachments: [{filename: 'test.pdf', file: pdf}, {filename: 'test.pdf', path: 'test.pdf'}]
    //     }

    //     return await this.nodemailerService.sendMail(mailData);

    // }
}