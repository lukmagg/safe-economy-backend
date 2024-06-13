import { Field, Float, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { PaymentType } from 'src/constants';

@ObjectType()
export class Expense {
  @Field()
  id: string;

  @Field()
  description: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Float)
  amount: number;

  @Field()
  paymentType: PaymentType;

  @Field()
  @IsOptional()
  paymentDate?: Date;
}
