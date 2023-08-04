import { formatter } from "../../index";
const addThousandSeparator = (value: string) => {
  return formatter.addThousandSeparator(value);
};
const removeThousandSeparator = (value: string, defaultReturn?: any) => {
  return String(formatter.removeThousandSeparator(value, defaultReturn));
};
export function useThousandSeparator() {
  return { addThousandSeparator, removeThousandSeparator };
}
