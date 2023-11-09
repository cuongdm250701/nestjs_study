import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { StoreModule } from 'src/store/store.module';

const configLoginFb = {
  appId: 'facebook001',
  appSecret: 'facebook001',
};
@Module({
  imports: [StoreModule],
  controllers: [UsersController],
  providers: [
    {
      provide: 'USER_SERVICE_ALIAS',
      // useValue: configLoginFb,// ko the su dung dong thoi useValue va useClass
      useClass: UsersService,
    },
    {
      provide: 'USER_LOGIN',
      useValue: configLoginFb,
    },
    // useFactory
    UsersRepository,
  ], // chỉ ở cấp độ modules
})
export class UsersModule {}
