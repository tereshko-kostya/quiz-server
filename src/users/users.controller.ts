import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserDto } from './dto/getUser.dto';
import { CreateDto } from './dto/create.dto';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    @Post('/create')
    async create(@Body() createDto: CreateDto) {
        return await this.usersService.create(createDto);
    }

    @Get('/getUser')
    async getUser(@Query() getUserDto: GetUserDto) {
        return await this.usersService.getUser(getUserDto);
    }
}
