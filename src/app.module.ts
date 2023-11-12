import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { StoreModule } from './store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/users.entity';

@Module({
  imports: [
    PostsModule,
    UsersModule,
    StoreModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 6606,
      username: 'root',
      password: 'cuongdm250701',
      database: 'nestjs_study',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
