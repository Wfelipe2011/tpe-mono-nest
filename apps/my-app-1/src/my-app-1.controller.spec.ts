import { Test, TestingModule } from '@nestjs/testing';
import { MyApp1Controller } from './my-app-1.controller';
import { MyApp1Service } from './my-app-1.service';

describe('MyApp1Controller', () => {
  let myApp1Controller: MyApp1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyApp1Controller],
      providers: [MyApp1Service],
    }).compile();

    myApp1Controller = app.get<MyApp1Controller>(MyApp1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(myApp1Controller.getHello()).toBe('Hello World!');
    });
  });
});
