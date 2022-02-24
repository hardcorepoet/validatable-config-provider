# Модуль конфигурирования приложения с валидацией

## Использование

* Создать конфигурацию в папке config приложения (см. [node-config](https://www.npmjs.com/package/config))
* Создать класс для конфигурации c валидаторами (см. [class-validator](https://www.npmjs.com/package/class-validator))
* Получить готовую конфигурацию в приложении

## Пример

```ts
import { IsNumber, IsString } from 'class-validator';

export class DatabaseConfig {
  @IsString()
  host: string;

  @IsNumber()
  port: number;
}


```
