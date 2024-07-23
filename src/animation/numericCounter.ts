import { parseNumberDetails, computeExpression } from '..';

export function animateNumericCount(
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void,
  decimalPlaces?: number,
): () => void {
  if (decimalPlaces === undefined) {
    const { decimalLength } = parseNumberDetails(start);
    decimalPlaces = decimalLength;
  }
  if (decimalPlaces === 0) {
    const { decimalLength } = parseNumberDetails(end);
    decimalPlaces = decimalLength;
  }
  const startTime = performance.now();
  const difference = Number(computeExpression(`${end} - ${start}`));

  const roundToDecimal = (num: number): number => {
    const factor = Math.pow(10, decimalPlaces);
    return Number(computeExpression(`${Math.round(Number(computeExpression(`${num} * ${factor}`)))} / ${factor}`));
  };

  const animate = (currentTime: number) => {
    const elapsedTime = Number(computeExpression(`${currentTime} - ${startTime}`));
    if (elapsedTime >= duration) {
      callback(roundToDecimal(end));
      return;
    }

    const progress = elapsedTime / duration;
    const currentValue = Number(computeExpression(`${start} + ${difference} * ${progress}`));
    callback(roundToDecimal(currentValue));
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  // 返回一个取消动画的函数
  return () => {
    callback(roundToDecimal(end));
  };
}
