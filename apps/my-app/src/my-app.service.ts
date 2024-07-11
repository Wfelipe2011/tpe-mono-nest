import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppService {
  getHello(): string {
    return 'Hello World! This is my first NestJS app! 123';
  }
}
