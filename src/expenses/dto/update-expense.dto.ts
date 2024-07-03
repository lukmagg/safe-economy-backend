import { CreateExpenseDto } from './create-expense.dto';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {
  @Field(() => String)
  id: string;
}
