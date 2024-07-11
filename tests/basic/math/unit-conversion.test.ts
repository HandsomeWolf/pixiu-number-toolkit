import { describe, it, expect } from '@jest/globals';
import { unitConversion } from '../../../src';

describe('unitConversion', () => {
  it('长度单位', () => {
    expect(unitConversion(0.3, 'km', 'm', true)).toBe('300 m'); // 千米 -> 米
    expect(unitConversion(1, 'm', 'cm')).toBe(100); // 米 -> 厘米
    expect(unitConversion(1, 'cm', 'mm')).toBe(10); // 厘米 -> 毫米
    expect(unitConversion(1, 'mm', 'um')).toBe(1000); // 毫米 -> 微米
    expect(unitConversion(1, 'um', 'nm')).toBe(1000); // 微米 -> 纳米
    expect(unitConversion(1, 'nm', 'pm')).toBe(1000); // 纳米 -> 皮米
  });
  it('重量单位', () => {
    expect(unitConversion(1234, 'kg', 't')).toBe(1.234); // 吨 -> 千克
    expect(unitConversion(1.123, 't', 'kg')).toBe(1123); // 吨 -> 千克
    expect(unitConversion(1, 'kg', 'g')).toBe(1000); // 千克 -> 克
    expect(unitConversion(1, 'g', 'mg')).toBe(1000); // 克 -> 毫克
  });

  it('面积单位', () => {
    expect(unitConversion(1, 'km2', 'm2')).toBe(1_000_000); // 平方千米 -> 平方米
    expect(unitConversion(1, 'm2', 'cm2')).toBe(10_000); // 平方米 -> 平方厘米
    expect(unitConversion(1, 'cm2', 'mm2')).toBe(100); // 平方厘米 -> 平方毫米
  });

  it('体积单位', () => {
    expect(unitConversion(1, 'km3', 'm3')).toBe(1_000_000_000); // 立方千米 -> 立方米
    expect(unitConversion(1, 'm3', 'cm3')).toBe(1_000_000); // 立方米 -> 立方厘米
  });

  it('速度单位', () => {
    expect(unitConversion(1, 'km/h', 'm/s')).toBe(0.277_777_777_777_777_8); // 千米/小时 -> 米/秒
    expect(unitConversion(1, 'm/s', 'km/h')).toBe(3.6); // 米/秒 -> 千米/小时
  });

  it('温度单位', () => {
    expect(unitConversion(1, 'degC', 'degF')).toBe(33.8); // 摄氏度 -> 华氏度
    expect(unitConversion(1, 'degF', 'degC')).toBe(-17.222_222_222_222_22); // 华氏度 -> 摄氏度
  });

  it('压力单位', () => {
    expect(unitConversion(1, 'kPa', 'Pa')).toBe(1000); // 千帕 -> 帕斯卡
    expect(unitConversion(1, 'Pa', 'kPa')).toBe(0.001); // 帕斯卡 -> 千帕
  });

  it('功率单位', () => {
    expect(unitConversion(1, 'kW', 'W')).toBe(1000); // 千瓦 -> 瓦
    expect(unitConversion(1, 'W', 'kW')).toBe(0.001); // 瓦 -> 千瓦
  });

  it('电量单位', () => {
    expect(unitConversion(1, 'kWh', 'Wh')).toBe(1000); // 千瓦时 -> 瓦时
    expect(unitConversion(1, 'Wh', 'kWh')).toBe(0.001); // 瓦时 -> 千瓦时
  });

  it('电压单位', () => {
    expect(unitConversion(1, 'kV', 'V')).toBe(1000); // 千伏 -> 伏
    expect(unitConversion(1, 'V', 'kV')).toBe(0.001); // 伏 -> 千伏
  });

  it('电流单位', () => {
    expect(unitConversion(1, 'kA', 'A')).toBe(1000); // 千安 -> 安
    expect(unitConversion(1, 'A', 'kA')).toBe(0.001); // 安 -> 千安
  });

  it('时间单位', () => {
    expect(unitConversion(1, 'h', 'min')).toBe(60); // 小时 -> 分钟
    expect(unitConversion(1, 'min', 's')).toBe(60); // 分钟 -> 秒
    expect(unitConversion(1, 'day', 'h')).toBe(24); // 天 -> 小时
    expect(unitConversion(1, 'week', 'day')).toBe(7); // 周 -> 天
    expect(unitConversion(1, 'year', 'day')).toBe(365.25); // 年 -> 天
    expect(unitConversion(1, 'year', 'month')).toBe(12); // 年 -> 月
  });

  it('角度单位', () => {
    expect(unitConversion(180, 'deg', 'rad')).toBeCloseTo(Math.PI, 5); // 度 -> 弧度
    expect(unitConversion(Math.PI, 'rad', 'deg')).toBeCloseTo(180, 5); // 弧度 -> 度
    expect(unitConversion(1, 'deg', 'grad')).toBeCloseTo(1.1111111, 5); // 度 -> 百分度
  });

  it('数据存储单位', () => {
    expect(unitConversion(1, 'GB', 'MB')).toBe(1000); // 吉字节 -> 兆字节
    expect(unitConversion(1, 'MB', 'kB')).toBe(1000); // 兆字节 -> 千字节
    expect(unitConversion(1, 'kB', 'B')).toBe(1000); // 千字节 -> 字节
    expect(unitConversion(1, 'B', 'bit')).toBe(8); // 字节 -> 比特
  });

  it('频率单位', () => {
    expect(unitConversion(1, 'kHz', 'Hz')).toBe(1000); // 千赫兹 -> 赫兹
    expect(unitConversion(1, 'MHz', 'kHz')).toBe(1000); // 兆赫兹 -> 千赫兹
  });

  it('力单位', () => {
    expect(unitConversion(1, 'kN', 'N')).toBe(1000); // 千牛顿 -> 牛顿
    expect(unitConversion(1, 'N', 'lbf')).toBeCloseTo(0.224809, 5); // 牛顿 -> 磅力
  });

  it('压强单位', () => {
    expect(unitConversion(1, 'bar', 'Pa')).toBe(100000); // 巴 -> 帕斯卡
    expect(unitConversion(1, 'atm', 'Pa')).toBeCloseTo(101325, 0); // 标准大气压 -> 帕斯卡
    expect(unitConversion(760, 'mmHg', 'atm')).toBeCloseTo(1, 5); // 毫米汞柱 -> 标准大气压
  });

  it('复合单位', () => {
    expect(unitConversion(1, 'N*m', 'J')).toBe(1); // 牛顿米 -> 焦耳
    expect(unitConversion(1, 'kg*m/s^2', 'N')).toBe(1); // 千克米每平方秒 -> 牛顿
  });
});
