import { isValidChineseIdCard } from '../validation';

export interface IdCardDetails {
  /**
   * 归属地区
   */
  region: string;
  /**
   * 出生日期
   */
  birthDate: string;
  /**
   * 性别
   */
  gender: string;
  /**
   * 身份证号码是否有效
   */
  valid: boolean;
}

export function parseIdCard(id: string): IdCardDetails {
  if (!isValidChineseIdCard(id)) {
    return {
      region: '',
      birthDate: '',
      gender: '',
      valid: false,
    };
  }
  const regionCode = id.slice(0, 6);
  const birthDate = `${id.slice(6, 10)}-${id.slice(10, 12)}-${id.slice(
    12,
    14,
  )}`;
  const gender = Number.parseInt(id.slice(14, 17), 10) % 2 === 0 ? '女' : '男';
  const region = regionCode;

  return {
    region,
    birthDate,
    gender,
    valid: true,
  };
}
