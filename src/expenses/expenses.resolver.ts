import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { ExpensesService } from './expenses.service';
import { Expense } from './models/expenses.model';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Resolver()
export class ExpensesResolver {
  constructor(private expensesService: ExpensesService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query(() => Expense)
  async expense(@Args('id', { type: () => String }) id: string) {
    return this.expensesService.findOneById(id);
  }

  @Query(() => [Expense], { name: 'monthExpenses' })
  async monthExpenses() {
    return this.expensesService.monthExpenses();
  }

  @Query(() => Number)
  async totalSpent() {
    return this.expensesService.totalSpent();
  }

  @Mutation(() => Expense, { name: 'createExpense' })
  async createExpense(
    @Args('createExpenseDto') createExpenseDto: CreateExpenseDto,
  ) {
    const createdExpense = await this.expensesService.create(createExpenseDto);

    return createdExpense;
  }

  @Mutation(() => Expense, { name: 'updateExpense' })
  async updateExpense(
    @Args('updateExpenseDto')
    updateExpenseDto: UpdateExpenseDto,
  ) {
    const updated = await this.expensesService.update(updateExpenseDto);

    return updated;
  }

  @Mutation(() => String)
  async deleteExpense(
    @Args('id')
    id: string,
  ) {
    await this.expensesService.delete(id);
    return id;
  }
}
