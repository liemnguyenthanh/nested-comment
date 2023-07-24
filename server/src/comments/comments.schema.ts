import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MongoId } from '../types'

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({ type: MongoId, ref: 'Comment' })
  parent_id: string;

  @Prop()
  timestamp: number;

  @Prop()
  left: number;

  @Prop()
  right: number;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);