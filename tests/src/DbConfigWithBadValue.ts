import { IsString } from 'class-validator';
import { DatabaseConfig } from './DatabaseConfig';

export class DbConfigWithBadValue extends DatabaseConfig {
  @IsString()
  badValue: string;
}