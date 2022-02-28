# Class-based validatable config provider for NodeJS

## Usage

* Create configuration structure in your config directory (see. [node-config](https://www.npmjs.com/package/config))
* Create class for your configuration section (database config, auth config etc.) and mark fields you want to validate with decorators (см. [class-validator](https://www.npmjs.com/package/class-validator))
* Get your configuration using instance of ValidatableConfigProvider

## Example

See [base provder tests](./tests/src//ValidatableConfigProviderImpl.tests.ts)

```ts
import { IsNumber, IsString } from 'class-validator';
import { ValidatableConfigProviderBuilder } from 'validatable-config-provider'

export class DatabaseConfig {
  @IsString()
  host: string;

  @IsNumber()
  port: number;
}

const provider = ValidatableConfigProviderBuilder.getInstance();

const dbConfig = provider.getSection('db');

console.log(dbConfig.port);
```
