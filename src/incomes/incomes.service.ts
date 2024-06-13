import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Income } from './schemas/income.schema';
import { Model } from 'mongoose';
import { CreateIncomeDto } from './dto/create-income.dto';

@Injectable()
export class IncomesService {
  constructor(@InjectModel(Income.name) private incomeModel: Model<Income>) {}

  async create(createIncomeDto: CreateIncomeDto): Promise<Income> {
    const createdIncome = new this.incomeModel(createIncomeDto);
    return createdIncome.save();
  }

  async findAll(): Promise<Income[]> {
    return this.incomeModel.find().exec();
  }

  findOneById(id: string) {
    return {
      id,
    };
  }
}
