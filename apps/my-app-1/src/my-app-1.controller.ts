import { Controller, Get } from '@nestjs/common';
import { MyApp1Service } from './my-app-1.service';

@Controller()
export class MyApp1Controller {
  constructor(private readonly myApp1Service: MyApp1Service) {}

  @Get()
  getHello(): string {
    return this.myApp1Service.getHello();
  }
}
