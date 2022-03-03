import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { util } from 'config';
import { ConfigurationObject } from './ConfigurationObject';
import {
  ClassCtor,
  ValidatableConfigProvider,
} from './ValidatableConfigProvider';

export class ValidatableConfigProviderBase extends ValidatableConfigProvider {
  private readonly _config: ConfigurationObject;

  constructor(config: ConfigurationObject) {
    super();
    this._config = config;
  }

  getSection<T extends object>(cls: ClassCtor<T>, configPath: string): T {
    const obj = util.toObject(this._config.get(configPath));

    const transformedConfig = plainToClass(cls, obj);

    const validationResult = validateSync(transformedConfig);

    if (Array.isArray(validationResult) && validationResult.length > 0) {
      throw new Error(
        `Config validation for path "${configPath}" and type ${
          cls.name
        } had failed. Bad properties: ${validationResult
          .map(
            ({ property, value }) => `Property: ${property}, value: ${value}`
          )
          .join(`;`)}`
      );
    }

    return transformedConfig;
  }

  getPlainValue(configPath: string): any {
    const config = this._config.get(configPath);

    return config;
  }
}
