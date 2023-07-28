import { describe, expect, it } from "vitest";
import { math } from "../src/index";

describe("computeExpression", () => {
  const parameters = { x: 0.1, y: 0.2 };

  it("计算表达式", () => {
    expect(math.computeExpression("0.1+0.2")).toBe(0.3);
    expect(math.computeExpression(`${parameters.x}+${parameters.y}`)).toBe(0.3);
  });

  it("计算带参表达式", () => {
    expect(math.computeExpression("x+y", { x: 0.1, y: 0.2 })).toBe(0.3);
  });

  it("保留小数位数", () => {
    expect(math.computeExpression("0.113+0.223", 2)).toBe(0.34);
  });

  it("千位分隔符", () => {
    expect(math.computeExpression("1111.1+2222.2", true)).toBe("3,333.3");
  });

  it("保留小数位数+千位分隔符", () => {
    expect(math.computeExpression("1111.113+2222.223", 2, true)).toBe(
      "3,333.34",
    );
  });
});
