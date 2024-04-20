import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './app.entity';
import mongoose from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Cat.name) private readonly catModel:mongoose.Model<Cat>
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async add(body){
    return await this.catModel.create(body);
  }
}
