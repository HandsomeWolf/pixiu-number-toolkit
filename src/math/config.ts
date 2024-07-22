import { type BigNumber, all, create } from 'mathjs';
import { isValidThousandSeparatedNumber } from '..';

export const math = create(all, { number: 'BigNumber' });

interface Parameters {
  [key: string]: number | string | BigNumber;
}

// 该函数将参数转为BigNumber类型
export function convertToBigNumbers(parameters: Parameters) {
  const convertedParameters: Parameters = {};
  for (const [key, value] of Object.entries(parameters)) {
    if (typeof value === 'number') {
      convertedParameters[key] = math.bignumber(value);
    } else if (typeof value === 'string') {
      convertedParameters[key] = isValidThousandSeparatedNumber(value)
        ? math.bignumber(Number(value.replaceAll(',', '')))
        : math.bignumber(value);
    }
  }
  return convertedParameters;
}


math.createUnit({
  // 定义长度单位
  Li: { definition: '500 meter' }, // 里

  // 定义时间单位
  ShiChen: { definition: '2 hour' }, // 时辰

  // 定义质量单位
  Jin: { definition: '500 g' }, // 斤
  Liang: { definition: '50 g' }, // 两
  Qian: { definition: '5 g' }, // 钱

  // 定义容量单位
  Dou: { definition: '10 L' }, // 斗
  Hu: { definition: '10 Dou' }, // 斛

  // 定义面积单位
  Mu: { definition: '666.67 m^2' }, // 亩
  Shang: { definition: '1 hectare' }, // 垧

  // 定义长度单位
  Chi: { definition: '0.33333333333333333 m' }, // 尺
  Cun: { definition: '0.1 Chi' }, // 寸
  Zhang: { definition: '10 Chi' }, // 丈
});
