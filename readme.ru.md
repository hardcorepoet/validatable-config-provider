# Модуль конфигурирования приложения с валидацией

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

const dbConfig = provider.getSection('db');

console.log(dbConfig.port);
```
