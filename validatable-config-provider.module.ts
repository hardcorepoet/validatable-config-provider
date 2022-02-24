import { Module } from '@nestjs/common';
import * as config from 'config';
import {
  ValidatableConfigProvider,
  ValidatableConfigProviderBase,
} from './src';

@Module({
  providers: [
    {
      provide: ValidatableConfigProvider,
      useValue: ValidatableConfigProviderBase,
    },
  ],
  exports: [ValidatableConfigProvider],
})
export class ValidatableConfigProviderModule {
  forRoot(config: config.IConfig) {}
}
