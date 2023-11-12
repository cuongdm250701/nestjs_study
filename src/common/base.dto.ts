import { Expose, plainToInstance } from 'class-transformer';

export abstract class BaseDto {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  // trả về một kiểu plainToClass có kiểu là bất kì (T là kiểu bất kì)
  static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToInstance(this, obj, { excludeExtraneousValues: true });
  }
}
