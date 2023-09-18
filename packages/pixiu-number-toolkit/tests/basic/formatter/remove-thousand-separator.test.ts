/* eslint-disable unicorn/no-null */
import { describe, expect, it } from "vitest";
import { removeThousandSeparator } from "../../../src";

describe("removeThousandSeparator", () => {
  describe("should return null", () => {
    it("when input is null", () => {
      expect(removeThousandSeparator(null as any)).toBe(null);
    });

    it("when input is undefined", () => {
      expect(removeThousandSeparator(undefined as any)).toBe(undefined);
    });

    it("when input is empty string", () => {
      expect(removeThousandSeparator("")).toBe("");
    });

    it("when input is 0", () => {
      expect(removeThousandSeparator(0 as any)).toBe(0);
    });
  });

  describe("should return input", () => {
    it("when input is number", () => {
      expect(removeThousandSeparator(1.123 as any)).toBe(1.123);
    });

    it("when input is number", () => {
      expect(removeThousandSeparator(123_456_789 as any)).toBe(123_456_789);
    });

    it("when input is string", () => {
      expect(removeThousandSeparator("123456789")).toBe(123_456_789);
    });

    it("when input is string", () => {
      expect(removeThousandSeparator("123,456,789")).toBe(123_456_789);
    });

    it("when input is string", () => {
      expect(removeThousandSeparator("123,456,789.123")).toBe(123_456_789.123);
    });
  });

  describe("should return input", () => {
    it("when input is null", () => {
      expect(removeThousandSeparator(null as any, "")).toBe("");
    });

    it("when input is undefined", () => {
      expect(removeThousandSeparator(undefined as any, "")).toBe("");
    });

    it("when input is empty string", () => {
      expect(removeThousandSeparator("", "")).toBe("");
    });

    it("when input is 0", () => {
      expect(removeThousandSeparator(0 as any, "")).toBe(0);
    });
  });

  describe("should return input", () => {
    it("when input is number", () => {
      expect(removeThousandSeparator(1.123 as any, "")).toBe(1.123);
    });

    it("when input is number", () => {
      expect(removeThousandSeparator(123_456_789 as any, "")).toBe(123_456_789);
    });

    it("when input is string", () => {
      expect(removeThousandSeparator("123456789", "")).toBe(123_456_789);
    });

    it("when input is string", () => {
      expect(removeThousandSeparator("123,456,789", "")).toBe(123_456_789);
    });

    it("when input is string", () => {
      expect(removeThousandSeparator("123,456,789.123", "")).toBe(
        123_456_789.123,
      );
    });
  });

  describe("should return NaN", () => {
    it("when input is string", () => {
      expect(removeThousandSeparator("123,abc,789")).toBe(Number.NaN);
    });

    it("when input is string", () => {
      expect(removeThousandSeparator("123,456,789abc")).toBe(Number.NaN);
    });
  });

  describe("should return input", () => {
    it("when input is string", () => {
      expect(removeThousandSeparator("123,,456,789")).toBe(123_456_789);
    });
  });

  describe("should return input", () => {
    it("when input is string", () => {
      expect(removeThousandSeparator("123,45,6789")).toBe(123_456_789);
    });
  });

  describe("should return input", () => {
    it("when input is string", () => {
      expect(removeThousandSeparator(Number.MAX_VALUE as any)).toBe(
        Number.MAX_VALUE,
      );
    });

    it("when input is string", () => {
      expect(removeThousandSeparator(Number.MIN_VALUE as any)).toBe(
        Number.MIN_VALUE,
      );
    });
  });

  describe("should return input", () => {
    it("when input is string", () => {
      expect(removeThousandSeparator(Number.MAX_SAFE_INTEGER as any)).toBe(
        Number.MAX_SAFE_INTEGER,
      );
    });

    it("when input is string", () => {
      expect(removeThousandSeparator(Number.MIN_SAFE_INTEGER as any)).toBe(
        Number.MIN_SAFE_INTEGER,
      );
    });
  });

  describe("should return input", () => {
    it("when input is string", () => {
      expect(removeThousandSeparator(Number.POSITIVE_INFINITY as any)).toBe(
        Number.POSITIVE_INFINITY,
      );
    });

    it("when input is string", () => {
      expect(removeThousandSeparator(Number.NEGATIVE_INFINITY as any)).toBe(
        Number.NEGATIVE_INFINITY,
      );
    });
  });

  describe("should return input", () => {
    it("when input is string", () => {
      expect(removeThousandSeparator(Number.NaN as any)).toBe(Number.NaN);
    });
  });
});
