import { Document } from 'mongoose';

export interface User extends Document {
  readonly userId: string;
  readonly username: string;
  readonly image: string
}