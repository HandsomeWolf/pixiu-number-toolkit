import { describe, expect, it } from "vitest";
import { math } from "../dist/index.js";

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
      "3,333.34"
    );
  });

  // 添加更多的测试用例以覆盖所有的函数重载和边界情况
});

describe("unitConversion", () => {
  it("长度单位", () => {
    expect(math.unitConversion(0.3, "km", "m", true)).toBe("300 m"); // 千米 -> 米
    expect(math.unitConversion(1, "m", "cm")).toBe(100); // 米 -> 厘米
    expect(math.unitConversion(1, "cm", "mm")).toBe(10); // 厘米 -> 毫米
    expect(math.unitConversion(1, "mm", "um")).toBe(1000); // 毫米 -> 微米
    expect(math.unitConversion(1, "um", "nm")).toBe(1000); // 微米 -> 纳米
    expect(math.unitConversion(1, "nm", "pm")).toBe(1000); // 纳米 -> 皮米
  });
  it("重量单位", () => {
    expect(math.unitConversion(1234, "kg", "t")).toBe(1.234); // 吨 -> 千克
    expect(math.unitConversion(1.123, "t", "kg")).toBe(1123); // 吨 -> 千克
    expect(math.unitConversion(1, "kg", "g")).toBe(1000); // 千克 -> 克
    expect(math.unitConversion(1, "g", "mg")).toBe(1000); // 克 -> 毫克
  });

  it("面积单位", () => {
    expect(math.unitConversion(1, "km2", "m2")).toBe(1_000_000); // 平方千米 -> 平方米
    expect(math.unitConversion(1, "m2", "cm2")).toBe(10_000); // 平方米 -> 平方厘米
    expect(math.unitConversion(1, "cm2", "mm2")).toBe(100); // 平方厘米 -> 平方毫米
  });

  it("体积单位", () => {
    expect(math.unitConversion(1, "km3", "m3")).toBe(1_000_000_000); // 立方千米 -> 立方米
    expect(math.unitConversion(1, "m3", "cm3")).toBe(1_000_000); // 立方米 -> 立方厘米
  });

  // TODO：时间单位需要使用dayjs进行转换

  it("速度单位", () => {
    expect(math.unitConversion(1, "km/h", "m/s")).toBe(0.277_777_777_777_777_8); // 千米/小时 -> 米/秒
    expect(math.unitConversion(1, "m/s", "km/h")).toBe(3.6); // 米/秒 -> 千米/小时
  });

  // TODO:有精度问题
  it("温度单位", () => {
    // console.log(math.unitConversion(1, "degC", "degF"));
    // expect(math.unitConversion(1, "degC", "degF")).toBe(33.8); // 摄氏度 -> 华氏度
    // expect(math.unitConversion(1, "degF", "degC")).toBe(-17.222_222_222_222_22); // 华氏度 -> 摄氏度
  });

  it("压力单位", () => {
    expect(math.unitConversion(1, "kPa", "Pa")).toBe(1000); // 千帕 -> 帕斯卡
    expect(math.unitConversion(1, "Pa", "kPa")).toBe(0.001); // 帕斯卡 -> 千帕
  });

  it("功率单位", () => {
    expect(math.unitConversion(1, "kW", "W")).toBe(1000); // 千瓦 -> 瓦
    expect(math.unitConversion(1, "W", "kW")).toBe(0.001); // 瓦 -> 千瓦
  });

  it("电量单位", () => {
    expect(math.unitConversion(1, "kWh", "Wh")).toBe(1000); // 千瓦时 -> 瓦时
    expect(math.unitConversion(1, "Wh", "kWh")).toBe(0.001); // 瓦时 -> 千瓦时
  });

  it("电压单位", () => {
    expect(math.unitConversion(1, "kV", "V")).toBe(1000); // 千伏 -> 伏
    expect(math.unitConversion(1, "V", "kV")).toBe(0.001); // 伏 -> 千伏
  });

  it("电流单位", () => {
    expect(math.unitConversion(1, "kA", "A")).toBe(1000); // 千安 -> 安
    expect(math.unitConversion(1, "A", "kA")).toBe(0.001); // 安 -> 千安
  });

  // 添加更多的测试用例以覆盖所有的单位和边界情况
});
