import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { StoreModule } from 'src/store/store.module';

@Module({
  imports: [
    StoreModule.register({
      dirname: 'store',
      filename: 'posts.json',
    }),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
