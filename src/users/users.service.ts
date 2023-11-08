import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return [
      {
        id: 1,
        name: 'Cuong',
      },
      {
        id: 2,
        name: 'Manh',
      },
    ];
  }

  // createUser(): UsersDto {
  //   return {
  //     username: user.username,
  //     password: user.password,
  //   };
  // }
}
