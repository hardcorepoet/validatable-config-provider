# Class-based validatable config provider for NodeJS 

## Usage

* Create configuration structure in your config directory (see. [node-config](https://www.npmjs.com/package/config))
* Create class for your configuration section (database config, auth config etc.) and mark fields you want to validate with decorators (см. [class-validator](https://www.npmjs.com/package/class-validator))
* Get your configuration using instance of ValidatableConfigProvider

## Example

```ts
import { IsNumber, IsString } from 'class-validator';
import * as config from 'config'

export class DatabaseConfig {
  @IsString()
  host: string;

  @IsNumber()
  port: number;
}


```
