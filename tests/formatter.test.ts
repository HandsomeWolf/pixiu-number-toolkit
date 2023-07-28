/* eslint-disable unicorn/no-useless-undefined */
/* eslint-disable unicorn/no-null */
import { describe, expect, it } from "vitest";
import { converter, formatter } from "../dist/index.js";

describe("formatter", () => {
  it("addThousandSeparator", () => {
    expect(formatter.addThousandSeparator(null)).toBe(null);
    expect(formatter.addThousandSeparator(null, true)).toBe("null");
    expect(formatter.addThousandSeparator(undefined)).toBe(undefined);
    expect(formatter.addThousandSeparator(undefined, true)).toBe("undefined");
    expect(formatter.addThousandSeparator(0)).toBe(0);
    expect(formatter.addThousandSeparator(0, true)).toBe("0");
    expect(formatter.addThousandSeparator(1.123)).toBe("1.123");
    expect(formatter.addThousandSeparator(-1.123)).toBe("-1.123");
    expect(formatter.addThousandSeparator(123_456_789)).toBe("123,456,789");
    expect(formatter.addThousandSeparator(-123_456_789)).toBe("-123,456,789");
    expect(formatter.addThousandSeparator(123_456_789, true)).toBe(
      "123,456,789"
    );
    expect(formatter.addThousandSeparator(-123_456_789, true)).toBe(
      "-123,456,789"
    );
    expect(formatter.addThousandSeparator("123456789")).toBe("123,456,789");
    expect(formatter.addThousandSeparator("-123456789")).toBe("-123,456,789");
    expect(formatter.addThousandSeparator("123456789", true)).toBe(
      "123,456,789"
    );
    expect(formatter.addThousandSeparator("123,456,789")).toBe("123,456,789");
    expect(formatter.addThousandSeparator("123,456,789", true)).toBe(
      "123,456,789"
    );
    expect(formatter.addThousandSeparator("", true)).toBe("");
    expect(formatter.addThousandSeparator("abc", true)).toBe("abc");
  });

  it("removeThousandSeparator", () => {
    expect(formatter.removeThousandSeparator(null)).toBe(0);
    expect(formatter.removeThousandSeparator(undefined)).toBe(0);
    expect(formatter.removeThousandSeparator("")).toBe(0);
    expect(formatter.removeThousandSeparator(0)).toBe(0);
    expect(formatter.removeThousandSeparator(1.123)).toBe(1.123);
    expect(formatter.removeThousandSeparator(123_456_789)).toBe(123_456_789);
    expect(formatter.removeThousandSeparator("123456789")).toBe(123_456_789);
    expect(formatter.removeThousandSeparator("123,456,789")).toBe(123_456_789);
  });

  it("formatPercentage", () => {
    expect(formatter.formatPercentage(null)).toBe(null);
    expect(formatter.formatPercentage(undefined)).toBe(undefined);
    expect(formatter.formatPercentage("")).toBe("");

    expect(formatter.formatPercentage(0)).toBe("0%");
    expect(formatter.formatPercentage(0, false)).toBe("0");

    expect(formatter.formatPercentage("0.15")).toBe("15%");
    expect(formatter.formatPercentage("0.15", true)).toBe("15%");
    expect(formatter.formatPercentage("0.15", false)).toBe("15");

    expect(formatter.formatPercentage(0.15)).toBe("15%");
    expect(formatter.formatPercentage(0.15, true)).toBe("15%");
    expect(formatter.formatPercentage(0.15, false)).toBe("15");

    expect(formatter.formatPercentage(0.15, 2)).toBe("15.00%");
    expect(formatter.formatPercentage(0.15, 2, true)).toBe("15.00%");
    expect(formatter.formatPercentage(0.15, 2, false)).toBe("15.00");
  });

  it("digitUppercase", () => {
    expect(converter.digitUppercase(123_456_789)).toBe(
      "壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元整"
    );
    expect(converter.digitUppercase(123.45)).toBe("壹佰贰拾叁元肆角伍分");
    expect(converter.digitUppercase(-123.45)).toBe("欠壹佰贰拾叁元肆角伍分");
  });

  it("formatCurrencyRenminbi", () => {
    expect(formatter.formatCurrencyRenminbi(123_456_789)).toBe(
      "¥123,456,789.00"
    );
  });
});
