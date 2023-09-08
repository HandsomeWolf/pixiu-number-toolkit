import { describe, expect, it } from "vitest";
import { numberToWords } from "../../../src";

describe("numberToWords", () => {
  it('should return "zero" for 0 in English', () => {
    const result = numberToWords(0, "en");
    expect(result).toBe("zero");
  });

  it('should return "零" for 0 in Chinese', () => {
    const result = numberToWords(0, "zh");
    expect(result).toBe("零");
  });

  it("should return the correct words for numbers less than 1000 in English", () => {
    const result1 = numberToWords(123, "en");
    expect(result1).toBe("one hundred twenty three");

    const result2 = numberToWords(456, "en");
    expect(result2).toBe("four hundred fifty six");

    const result3 = numberToWords(789, "en");
    expect(result3).toBe("seven hundred eighty nine");
  });

  it("should return the correct words for numbers less than 10000 in Chinese", () => {
    const result1 = numberToWords(1234, "zh");
    expect(result1).toBe("一千二百三十四");

    const result2 = numberToWords(4567, "zh");
    expect(result2).toBe("四千五百六十七");

    const result3 = numberToWords(7890, "zh");
    expect(result3).toBe("七千八百九十");
  });

  it("should return the correct words for larger numbers in English", () => {
    const result1 = numberToWords(1_234_567, "en");
    expect(result1).toBe(
      "one million two hundred thirty four thousand five hundred sixty seven",
    );

    const result2 = numberToWords(987_654_321, "en");
    expect(result2).toBe(
      "nine hundred eighty seven million six hundred fifty four thousand three hundred twenty one",
    );
  });

  it("should return the correct words for larger numbers in Chinese", () => {
    const result1 = numberToWords(12_345_678, "zh");
    expect(result1).toBe("一千二百三十四万五千六百七十八");

    const result2 = numberToWords(9_876_543_210, "zh");
    expect(result2).toBe("九十八亿七千六百五十四万三千二百一十");

    const result3 = numberToWords(1, "zh");
    expect(result3).toBe("一");

    const result4 = numberToWords(10, "zh");
    expect(result4).toBe("十");
  });
});
