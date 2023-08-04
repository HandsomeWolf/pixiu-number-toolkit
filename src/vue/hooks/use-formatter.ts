import { formatter } from "../../index";
const addThousandSeparator = (value: string) => {
  if (!value) return "";
  const parts = value.toString().split(".");
  parts[0] = parts[0]
    .replaceAll(",", "")
    .replaceAll(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  return parts.join(".");
};
const removeThousandSeparator = (value: string, defaultReturn?: any, decimalPlaces: number = 2) => {
  if (!value) return defaultReturn === undefined ? "" : defaultReturn;
  let result = value.replaceAll(/\$\s?|(,*)/g, "");
  const parts = result.split(".");
  if (parts[1] && parts[1].length > decimalPlaces) {
    parts[1] = parts[1].substring(0, decimalPlaces);
  }
  // 处理数字以0开头的情况
  if (parts[0] && parts[0].startsWith('0')) {
    parts[0] = parts[0].substring(1);
  }
  result = parts.join(".");
  return result;
};

export function useThousandSeparator() {

  return { addThousandSeparator, removeThousandSeparator };
}
