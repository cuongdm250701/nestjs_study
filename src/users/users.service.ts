import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { Repository } from 'typeorm';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // Promise<UsersDto>: trả về một Promise có kiểu dữ liệu là Dto
  async save(user: UsersDto): Promise<UsersDto> {
    const saveUser = await this.userRepository.save(user);
    return UsersDto.plainToClass(user);

    // trả về một promise có kiểu là userdto
    // nếu không có async thì vẫn trả về có kiểu là userdto nhưng không theo kiểu là một promise nên sẽ báo lỗi
  }
}
