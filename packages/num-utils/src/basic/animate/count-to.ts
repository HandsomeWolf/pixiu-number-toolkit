export function countTo(
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void,
) {
  const difference = end - start;
  const perTick = (difference / duration) * 10;

  let current = start;
  let elapsed = 0;

  const tick = () => {
    elapsed += 10;
    current += perTick;

    if (elapsed >= duration) {
      callback(end);
    } else {
      callback(current);
      requestAnimationFrame(tick);
    }
  };

  tick();
}
