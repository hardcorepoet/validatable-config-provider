import { ValidatableConfigProviderBuilder } from '../../src/ValidatableConfigProviderBuilder';
import { DatabaseConfig } from './DatabaseConfig';
import { DbConfigWithBadValue } from './DbConfigWithBadValue';
const configurationData = require('../config/test.json');

const sectionName = 'db';

describe('Configuration provider tests', () => {
  it('should return configuration section if it exists in configuration files', () => {
    const provider = ValidatableConfigProviderBuilder.getInstance();
    const actual = provider.getSection(DatabaseConfig, sectionName);

    expect(actual).toBeDefined();
    expect(actual).toBeInstanceOf(DatabaseConfig);
    expect(actual.host).toBe(configurationData.db.host);
    expect(actual.port).toBe(configurationData.db.port);
  });

  it('should throw error when validation fails', () => {
    const provider = ValidatableConfigProviderBuilder.getInstance();
    expect(() =>
      provider.getSection(DbConfigWithBadValue, sectionName)
    ).toThrowError();
  });

  it('should execute instance method of configuration class if configuration exists', () => {
    const provider = ValidatableConfigProviderBuilder.getInstance();

    const configurationSection = provider.getSection(
      DatabaseConfig,
      sectionName
    );

    const expected = `${configurationData.db.host}:${configurationData.db.port}`;
    const actual = configurationSection.buildConnectionString();

    expect(actual).toBe(expected);
  });

  it('should return plain value for path if configuration exists', () => {
    const provider = ValidatableConfigProviderBuilder.getInstance();

    const actual = provider.getPlainValue(sectionName);

    expect(actual).toBeDefined();
    expect(actual.host).toBe(configurationData.db.host);
    expect(actual.port).toBe(configurationData.db.port);
  });

  it('should fail returning flat value for path if configuration does not exist', () => {
    const provider = ValidatableConfigProviderBuilder.getInstance();

    expect(() => {
      provider.getPlainValue(sectionName + 'blah');
    }).toThrowError();
  });
});
