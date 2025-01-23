import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { GetUserDto } from './dto/getUser.dto';
import { CreateDto } from './dto/create.dto';

@Injectable()
export class UsersService {
    constructor(
        private usersRepository: UsersRepository
    ) {}

    async create(createDto: CreateDto) {
        try {
            let user = await this.usersRepository.findByUserId(createDto.userId);

            if (user) {
                throw new Error('User already exists!');
            }

            user = await this.usersRepository.create({
                userId: createDto.userId,
                username: createDto.username,
                image: createDto.image
            });

            return user;
        } catch(error: any) {
            throw new HttpException(error.message, error.status || error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getUser(getUserDto: GetUserDto) {
        try {
            return await this.usersRepository.findByUserId(getUserDto.userId);
        } catch(error: any) {
            throw new HttpException(error.message, error.status || error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
