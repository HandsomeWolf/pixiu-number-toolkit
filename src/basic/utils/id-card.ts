import { isValidChineseIdCard } from './validation';

export interface IdCardInfo {
  /**
   * 归属地区
   */
  region: string;
  /**
   * 出生日期
   */
  birthdate: string;
  /**
   * 性别
   */
  gender: string;
  /**
   * 身份证号码是否有效
   */
  valid: boolean;
}

export function parseIdCard(id: string): IdCardInfo {
  if (!isValidChineseIdCard(id)) {
    return {
      region: '',
      birthdate: '',
      gender: '',
      valid: false,
    };
  }
  const regionCode = id.slice(0, 6);
  const birthdate = `${id.slice(6, 10)}-${id.slice(10, 12)}-${id.slice(
    12,
    14,
  )}`;
  const gender = Number.parseInt(id.slice(14, 17), 10) % 2 === 0 ? '女' : '男';
  const region = regionCode;

  return {
    region,
    birthdate,
    gender,
    valid: true,
  };
}
