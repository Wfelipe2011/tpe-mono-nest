import { Injectable } from '@nestjs/common';

@Injectable()
export class MyApp1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
