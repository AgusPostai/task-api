import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    trim: true,
    required: true,
    unique: true,
  })
  title: string;

  @Prop({
    trim: true,
  })
  description: string;

  @Prop({
    deafault: false,
  })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
