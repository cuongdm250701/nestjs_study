import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
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
}
