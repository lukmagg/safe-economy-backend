import { Module } from '@nestjs/common';
import { IncomesResolver } from './incomes.resolver';
import { IncomesService } from './incomes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Income, IncomeSchema } from './schemas/income.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Income.name, schema: IncomeSchema }]),
  ],
  providers: [IncomesResolver, IncomesService],
})
export class IncomesModule {}
