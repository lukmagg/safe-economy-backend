import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsOptional } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type IncomeDocument = HydratedDocument<Income>;

@Schema()
export class Income {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  amount: number;

  @Prop()
  @IsOptional()
  paymentDate?: Date;
}

export const IncomeSchema = SchemaFactory.createForClass(Income);
