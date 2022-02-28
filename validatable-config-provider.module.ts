import { DynamicModule, Module } from '@nestjs/common';
import {
  ValidatableConfigProvider,
  ValidatableConfigProviderBuilder,
} from './src';
import { ConfigurationObject } from './src/ConfigurationObject';
import { ValidatableConfigProviderBase } from './src/ValidatableConfigProviderBase';

@Module({})
export class ValidatableConfigProviderModule {
  /** Registers configuration provider module
   * @param  {config.IConfig} config? optional configuration object
   */
  static forRoot(config?: ConfigurationObject): DynamicModule {
    const configInstance = config
      ? new ValidatableConfigProviderBase(config)
      : ValidatableConfigProviderBuilder.getInstance();

    return {
      module: ValidatableConfigProviderModule,
      providers: [
        {
          provide: ValidatableConfigProvider,
          useValue: configInstance,
        },
      ],
      exports: [ValidatableConfigProvider],
    };
  }
}
