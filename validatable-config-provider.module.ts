import { DynamicModule, Module } from '@nestjs/common';
import {
  ValidatableConfigProvider,
  ValidatableConfigProviderBase,
  ValidatableConfigProviderBuilder,
} from './src';
import { ConfigurationObject } from './src/ConfigurationObject';

@Module({})
export class ValidatableConfigProviderModule {
  /** Registers configuration provider module
   * @param  {config.IConfig} config? optional configuration object
   */
  forRoot(config?: ConfigurationObject): DynamicModule {
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
