import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() user: UsersDto): UsersDto {
    user.id = 1;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    //     const userReal = plainToClass(UsersDto, user, {
    //       excludeExtraneousValues: true,
    //     });
    return UsersDto.plainToClass(user);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return id;
  }
}
