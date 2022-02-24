import { ValidatableConfigProvider } from './ValidatableConfigProvider';
import { ValidatableConfigProviderBase } from './ValidatableConfigProviderBase';

let configProvider: ValidatableConfigProvider;

export class ValidatableConfigProviderBuilder {
  static getInstance(): ValidatableConfigProvider {
    if (!configProvider) {
      const config = require('config');

      configProvider = new ValidatableConfigProviderBase(config);
    }
    
    return configProvider;
  }
}