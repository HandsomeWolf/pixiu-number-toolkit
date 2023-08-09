/**
 * Convert amount to uppercase (将金额转换为大写)
 * @param n amount (金额)
 * @returns amount in uppercase (金额的大写形式)
 */
export function digitUppercase(n: number): string {
  // Define the fraction part (定义小数部分)
  const fraction = ["角", "分"];
  // Define the digit part (定义数字部分)
  const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  // Define the unit part (定义单位部分)
  const unit = [
    ["元", "万", "亿"],
    ["", "拾", "佰", "仟"],
  ];
  // Define the head part (定义头部部分)
  const head = n < 0 ? "欠" : "";
  // Convert n to its absolute value (将 n 转换为其绝对值)
  n = Math.abs(n);
  let s = "";
  // Convert the fraction part (转换小数部分)
  for (const [index, element] of fraction.entries()) {
    s += (digit[Math.floor(n * 10 * 10 ** index) % 10] + element).replace(
      /零./,
      "",
    );
  }
  s = s || "整";
  // Convert the integer part (转换整数部分)
  n = Math.floor(n);
  for (let index = 0; index < unit[0].length && n > 0; index++) {
    let p = "";
    for (let index_ = 0; index_ < unit[1].length && n > 0; index_++) {
      p = digit[n % 10] + unit[1][index_] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][index] + s;
  }
  // Return the final result (返回最终结果)
  return (
    head +
    s
      .replace(/(零.)*零元/, "元")
      .replaceAll(/(零.)+/g, "零")
      .replace(/^整$/, "零元整")
  );
}
