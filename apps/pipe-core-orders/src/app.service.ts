import { Injectable } from '@nestjs/common';
import { CalcService } from 'utils/calc';

@Injectable()
export class AppService {
  constructor(readonly calc: CalcService) {}
  getHello(): string {
    const [n1, n2] = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];
    return 'Hello World!' + ` ${n1} + ${n2} = ${this.calc.add(n1, n2)}`;
  }
}
