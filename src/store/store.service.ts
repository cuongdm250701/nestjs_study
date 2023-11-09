import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService {
  save(): void {
    console.log('success');
  }
}
