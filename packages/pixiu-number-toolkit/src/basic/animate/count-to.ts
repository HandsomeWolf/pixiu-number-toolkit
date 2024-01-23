import { computeExpression } from "../math/compute-expression";

export function countTo(
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void,
) {
  const difference = Number(computeExpression(`${end} - ${start}`));
  const perTick = Number(
    computeExpression(`(${difference} / ${duration}) * 10`),
  );

  let current = start;
  let elapsed = 0;

  const tick = () => {
    elapsed = Number(computeExpression(`${elapsed}+ 10`));
    current = Number(computeExpression(`${current} +${perTick}`));

    if (elapsed >= duration) {
      callback(end);
    } else {
      callback(current);
      requestAnimationFrame(tick);
    }
  };

  tick();
}
