import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';
import { StoreService } from 'src/store/store.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE_ALIAS') private readonly usersService: UsersService,
    @Inject('USER_LOGIN') private userLogin: any,
    @Inject('STORE_SERVICEusers.json')
    private readonly storeService: StoreService,
  ) {}

  @Get()
  getUsers() {
    // return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() user: UsersDto): Promise<UsersDto> {
    user.id = 1;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    //     const userReal = plainToClass(UsersDto, user, {
    //       excludeExtraneousValues: true,
    //     });
    //  return this.storeService.save(user);
    // return UsersDto.plainToClass(user);
    return this.usersService.save(user);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return id;
  }
}
