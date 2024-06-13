import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateIncomeDto {
  @Field()
  @IsString()
  readonly description: string;

  @Field()
  @IsNumber()
  readonly amount: number;

  @Field({ nullable: true })
  @IsOptional()
  readonly paymentDate?: Date;
}
