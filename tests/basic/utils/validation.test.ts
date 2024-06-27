import {describe, it, expect} from '@jest/globals'
import {
  isBlank,
  isNumeric,
  isValidThousandSeparatedNumber,
} from "../../../src";

describe("validation", () => {
  describe("isBlank", () => {
    it("should return true", () => {
      expect(isBlank(null as any)).toBe(true);
      expect(isBlank(undefined as any)).toBe(true);
      expect(isBlank("")).toBe(true);
      expect(isBlank(" ")).toBe(true);
      expect(isBlank(false as any)).toBe(true);
      expect(isBlank(0 as any)).toBe(true);
    });

    it("should return false", () => {
      expect(isBlank("null")).toBe(false);
      expect(isBlank(true as any)).toBe(false);
      expect(isBlank(1 as any)).toBe(false);
      expect(isBlank("a")).toBe(false);
    });
  });

  describe("isNumeric", () => {
    it("should return true", () => {
      expect(isNumeric(0)).toBe(true);
      expect(isNumeric(0.1)).toBe(true);
      expect(isNumeric(100.1)).toBe(true);
      expect(isNumeric("100.1")).toBe(true);
      expect(isNumeric("0.1")).toBe(true);
    });

    it("should return false", () => {
      expect(isNumeric(null as any)).toBe(false);
      expect(isNumeric(undefined as any)).toBe(false);
      expect(isNumeric({} as any)).toBe(false);
      expect(isNumeric([] as any)).toBe(false);
      expect(isNumeric("")).toBe(false);
      expect(isNumeric("abc")).toBe(false);
      expect(isNumeric("123abc")).toBe(false);
      expect(isNumeric("11,111")).toBe(false);
      expect(isNumeric("123.456.789")).toBe(false);
    });
  });

  describe("isValidThousandSeparatedNumber", () => {
    it("should return true", () => {
      expect(isValidThousandSeparatedNumber("1,000.1")).toBe(true);
    });

    it("should return false", () => {
      expect(isValidThousandSeparatedNumber(null as any)).toBe(false);
      expect(isValidThousandSeparatedNumber({} as any)).toBe(false);
      expect(isValidThousandSeparatedNumber([] as any)).toBe(false);

      expect(isValidThousandSeparatedNumber(0 as any)).toBe(false);
      expect(isValidThousandSeparatedNumber(100.1 as any)).toBe(false);

      expect(isValidThousandSeparatedNumber("")).toBe(false);
      expect(isValidThousandSeparatedNumber("0")).toBe(false);
      expect(isValidThousandSeparatedNumber("100.1")).toBe(false);

      expect(isValidThousandSeparatedNumber("1,00.1")).toBe(false);
      expect(isValidThousandSeparatedNumber("1,,000.1")).toBe(false);
      expect(isValidThousandSeparatedNumber("123,456789")).toBe(false);
    });
  });
});
