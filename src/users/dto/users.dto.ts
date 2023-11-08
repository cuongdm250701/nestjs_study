import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';

export class UsersDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  username: string;

  firstName: string;

  lastName: string;

  @Expose()
  @Transform(({ obj }) => obj.firstName + obj.lastName)
  fullName: string;

  @IsNotEmpty()
  @Expose()
  password: string;
}
