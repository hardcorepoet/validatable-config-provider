import { IsNumber, IsString } from 'class-validator';

export class DatabaseConfig {
  @IsString()
  host: string;

  @IsNumber()
  port: number;

  buildConnectionString() {
    return `${this.host}:${this.port}`
  }
}