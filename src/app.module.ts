import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [PostsModule, UsersModule, StoreModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
