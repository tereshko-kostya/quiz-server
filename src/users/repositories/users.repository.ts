import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from "../interfaces/user.interface";
import { CreateDto } from '../dto/create.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @Inject('USER_MODEL') 
    private userModel: Model<User>,
  ) {}

  async create(user: CreateDto): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findByUserId(userId: string): Promise<User> {
    return (await this.userModel.findOne({ userId }));
  }
}