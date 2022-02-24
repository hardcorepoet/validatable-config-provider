import * as config from 'config';
import { ValidatableConfigProviderBase } from '../../src/index';
import { ValidatableConfigProviderBuilder } from '../../src/ValidatableConfigProviderBuilder';
import { DatabaseConfig } from './DatabaseConfig';
import { DbConfigWithBadValue } from './DbConfigWithBadValue';
const configurationData = require('../config/test.json');

describe('', () => {
  it('should return configuration section if it exists in configuration files', () => {
    const provider = ValidatableConfigProviderBuilder.getInstance();
    const actual = provider.getSection(DatabaseConfig, 'db');

    expect(actual).toBeDefined();
    expect(actual).toBeInstanceOf(DatabaseConfig);
    expect(actual.host).toBe(configurationData.db.host);
    expect(actual.port).toBe(configurationData.db.port);
  });

  it('should throw error when validation fails', () => {
    const provider = new ValidatableConfigProviderBase(config);
    expect(() =>
      provider.getSection(DbConfigWithBadValue, 'db')
    ).toThrowError();
  });
});
