# Class-based validatable config provider for NodeJS

[![npm version](https://badge.fury.io/js/validatable-config-provider.svg)](https://badge.fury.io/js/validatable-config-provider)

## Usage

- Create configuration structure in your config directory (see [node-config](https://www.npmjs.com/package/config))
- Create class for your configuration section (database config, auth config etc.) and mark fields you want to validate with decorators (see [class-validator](https://www.npmjs.com/package/class-validator))
- Get your configuration using instance of ValidatableConfigProvider

## Example

See [base provider tests](./tests/src/ValidatableConfigProviderImpl.tests.ts)

```ts
import { IsNumber, IsString } from 'class-validator';
import { ValidatableConfigProviderBuilder } from 'validatable-config-provider';

export class DatabaseConfig {
  @IsString()
  host: string;

  @IsNumber()
  port: number;
}

const provider = ValidatableConfigProviderBuilder.getInstance();

const dbConfig = provider.getSection<DatabaseConfig>(DatabaseConfig, 'db');

console.log(dbConfig.port);
```

[Module for NestJS](./validatable-config-provider.module.ts) is also bundled with this package
