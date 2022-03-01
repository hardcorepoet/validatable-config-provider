# Модуль конфигурирования приложения с валидацией

[![npm version](https://badge.fury.io/js/validatable-config-provider.svg)](https://badge.fury.io/js/validatable-config-provider)
## Использование

* Создать конфигурацию в папке config приложения (см. [node-config](https://www.npmjs.com/package/config))
* Создать класс для конфигурации c валидаторами (см. [class-validator](https://www.npmjs.com/package/class-validator))
* Получить готовую конфигурацию в приложении

## Пример

Смотри [тесты](./tests/src//ValidatableConfigProviderImpl.tests.ts)

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

const dbConfig = provider.getSection<DatabaseConfig>(DatabaseConfig, 'db');

console.log(dbConfig.port);
```

Также доступен [модуль для NestJS](./validatable-config-provider.module.ts)
