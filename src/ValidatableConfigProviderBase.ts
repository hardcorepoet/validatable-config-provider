import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { IConfig, util } from 'config';
import { ConfigurationObject } from './ConfigurationObject';
import {
  ClassCtor,
  ValidatableConfigProvider,
} from './ValidatableConfigProvider';

export class ValidatableConfigProviderBase extends ValidatableConfigProvider {
  private readonly _config: ConfigurationObject;

  constructor(config: IConfig) {
    super();
    this._config = config;
  }

  /** Get deserialized config section
   * @param  {ClassCtor<T>} cls class constructor representing configuration section
   * @param  {string} configPath path to section config
   * @returns T
   * @throws will throw an error if config does not exist or if it fails validation
   */
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
}
