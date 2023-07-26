/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/no-useless-undefined */
// @ts-nocheck
import { describe, expect, it } from "vitest";
import {
  isBlank,
  isNumeric,
  isValidThousandSeparatedNumber,
} from "../src/utils/validation";
describe("utils", () => {
  it("isValidThousandSeparatedNumber", () => {
    expect(isValidThousandSeparatedNumber("123,456,789")).toBe(true);
    expect(isValidThousandSeparatedNumber("123,456789")).toBe(false);
    expect(isValidThousandSeparatedNumber("")).toBe(false);
  });

  it("isBlank", () => {
    expect(isBlank("")).toBe(true);
    expect(isBlank(" ")).toBe(true);
    expect(isBlank(null)).toBe(true);
    expect(isBlank(undefined)).toBe(true);
    expect(isBlank()).toBe(true);
    expect(isBlank(false)).toBe(true);
    expect(isBlank(0)).toBe(true);

    expect(isBlank("null")).toBe(false);
    expect(isBlank(true)).toBe(false);
    expect(isBlank(1)).toBe(false);
    expect(isBlank("123")).toBe(false);
  });

  it("isNumeric", () => {
    expect(isNumeric("123")).toBe(true);
    expect(isNumeric(123)).toBe(true);
    expect(isNumeric(1_234_567)).toBe(true);
    expect(isNumeric("123.456")).toBe(true);
    expect(isNumeric(0)).toBe(true);

    expect(isNumeric("11,111")).toBe(false);
    expect(isNumeric("123.456.789")).toBe(false);
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
    expect(isNumeric("")).toBe(false);
    expect(isNumeric("abc")).toBe(false);
    expect(isNumeric("123abc")).toBe(false);
  });
});
