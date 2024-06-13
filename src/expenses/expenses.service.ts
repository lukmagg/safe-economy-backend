import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './schemas/expense.schema';
import { Model } from 'mongoose';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
  ) {}

  private readonly logger = new Logger(ExpensesService.name);

  async create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    const createdExpense = new this.expenseModel(createExpenseDto);
    return createdExpense.save();
  }

  async findAll(): Promise<Expense[]> {
    return this.expenseModel.find().exec();
  }

  async monthExpenses(): Promise<Expense[]> {
    const date = new Date();
    const currentMonth = date.getMonth();

    const allExpenses = await this.findAll();

    const currentExpenses = allExpenses.filter(
      (data) => data.paymentDate.getMonth() === currentMonth,
    );

    return currentExpenses;
  }

  findOneById(id: string) {
    return {
      id,
    };
  }

  async totalSpent() {
    const date = new Date();
    const argsMonth = date.getMonth();

    const allExpenses = await this.findAll();

    const sameDateExpenses = allExpenses.filter(
      (data) => data.paymentDate.getMonth() === argsMonth,
    );

    let aux = 0;

    for (let index = 0; index < sameDateExpenses.length; index++) {
      aux += sameDateExpenses[index].amount;
    }

    //this.logger.log(sameDateExpenses.length);

    return aux;
  }
}
