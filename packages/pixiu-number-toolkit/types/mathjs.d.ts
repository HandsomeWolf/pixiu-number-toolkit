import * as mathjs from 'mathjs';

declare module 'mathjs' {
  interface MathJsStatic {
    add(...values: BigNumber[]): Decimal;
    multiply(...values: BigNumber[]): Decimal;
    subtract(...values: BigNumber[]): Decimal;
    divide(...values: BigNumber[]): Decimal;
  }
}
