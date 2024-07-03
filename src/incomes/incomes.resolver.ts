import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { IncomesService } from './incomes.service';
import { Income } from './models/incomes.model';
import { CreateIncomeDto } from './dto/create-income.dto';

@Resolver()
export class IncomesResolver {
  constructor(private incomesService: IncomesService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => Income)
  async income(@Args('id', { type: () => String }) id: string) {
    return this.incomesService.findOneById(id);
  }

  @Mutation(() => Income, { name: 'createIncome' })
  async createIncome(
    @Args('createIncomeDto') createIncomeDto: CreateIncomeDto,
  ) {
    const createdIncome = await this.incomesService.create(createIncomeDto);

    // await this.historyService.log({
    // 	action: HistoryRecordAction.CREATE,
    // 	type: HistoryRecordType.CONSTRUCTION,
    // 	target: createdConstruction.id.toString(),
    // 	user: authUser.id,
    // });

    return createdIncome;
  }

  @Mutation(() => Income)
  async testMutation() {
    const date = new Date();

    return {
      amount: '39',
      paymentDate: date,
      description: 'some description',
    };
  }
}
