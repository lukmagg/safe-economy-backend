import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { PaymentType } from 'src/constants';

@InputType()
export class CreateExpenseDto {
  @Field()
  @IsString()
  readonly description: string;

  @Field()
  @IsNumber()
  readonly amount: number;

  @Field()
  @IsString()
  readonly paymentType: PaymentType;

  @Field({ nullable: true })
  @IsOptional()
  readonly paymentDate?: Date;
}
