/**
 *  金额大写转换
 * @param n 金额
 * @returns 金额大写
 */
export function digitUppercase(n: number) {
  const fraction = ["角", "分"];
  const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  const unit = [
    ["元", "万", "亿"],
    ["", "拾", "佰", "仟"],
  ];
  const head = n < 0 ? "欠" : "";
  n = Math.abs(n);
  let s = "";
  for (const [index, element] of fraction.entries()) {
    s += (digit[Math.floor(n * 10 * 10 ** index) % 10] + element).replace(
      /零./,
      ""
    );
  }
  s = s || "整";
  n = Math.floor(n);
  for (let index = 0; index < unit[0].length && n > 0; index++) {
    let p = "";
    for (let index_ = 0; index_ < unit[1].length && n > 0; index_++) {
      p = digit[n % 10] + unit[1][index_] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][index] + s;
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, "元")
      // eslint-disable-next-line unicorn/prefer-string-replace-all
      .replace(/(零.)+/g, "零")
      .replace(/^整$/, "零元整")
  );
}
