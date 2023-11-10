import { Body, Controller, Post } from '@nestjs/common';
import { StoreService } from 'src/store/store.service';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly storeService: StoreService,
    private readonly postsService: PostsService,
  ) {}

  @Post()
  create(@Body() post: any) {
    console.log(post);
    return this.storeService.save(post);
  }
}
