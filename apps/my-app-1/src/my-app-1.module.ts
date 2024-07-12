import { Module } from '@nestjs/common';
import { MyApp1Controller } from './my-app-1.controller';
import { MyApp1Service } from './my-app-1.service';

@Module({
  imports: [],
  controllers: [MyApp1Controller],
  providers: [MyApp1Service],
})
export class MyApp1Module {}
