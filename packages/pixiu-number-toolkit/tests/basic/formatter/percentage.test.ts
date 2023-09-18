/* eslint-disable unicorn/no-null */
import { describe, expect, it } from "vitest";
import { formatPercentage } from "../../../src";

describe("percentage", () => {
  describe("should return null", () => {
    it("when input is null", () => {
      expect(formatPercentage(null as any)).toBe(null);
    });

    it("when input is undefined", () => {
      expect(formatPercentage(undefined as any)).toBe(undefined);
    });

    it("when input is empty string", () => {
      expect(formatPercentage("")).toBe("");
    });
  });

  describe("should return input", () => {
    it("when input is number", () => {
      expect(formatPercentage(0 as any)).toBe("0%");
    });

    it("when input is number", () => {
      expect(formatPercentage(0.15 as any)).toBe("15%");
    });

    it("when input is number", () => {
      expect(formatPercentage(0.156_78 as any)).toBe("15.678%");
    });

    it("when input is string", () => {
      expect(formatPercentage("0")).toBe("0%");
    });

    it("when input is string", () => {
      expect(formatPercentage("0.15")).toBe("15%");
    });

    it("when input is string", () => {
      expect(formatPercentage("0.15678")).toBe("15.678%");
    });
  });

  describe("should return input", () => {
    it("when input is null", () => {
      expect(formatPercentage(null as any, { carrySymbol: false })).toBe(null);
    });

    it("when input is undefined", () => {
      expect(formatPercentage(undefined as any, { carrySymbol: false })).toBe(
        undefined,
      );
    });

    it("when input is empty string", () => {
      expect(formatPercentage("", { carrySymbol: false })).toBe("");
    });

    it("when input is 0", () => {
      expect(formatPercentage(0 as any, { carrySymbol: false })).toBe("0");
    });
  });

  describe("should return input", () => {
    it("when input is number", () => {
      expect(formatPercentage(0 as any, { carrySymbol: false })).toBe("0");
    });

    it("when input is number", () => {
      expect(formatPercentage(0.15 as any, { carrySymbol: false })).toBe("15");
    });

    it("when input is number", () => {
      expect(formatPercentage(0.156_78 as any, { carrySymbol: false })).toBe(
        "15.678",
      );
    });

    it("when input is string", () => {
      expect(formatPercentage("0", { carrySymbol: false })).toBe("0");
    });

    it("when input is string", () => {
      expect(formatPercentage("0.15", { carrySymbol: false })).toBe("15");
    });

    it("when input is string", () => {
      expect(formatPercentage("0.15678", { carrySymbol: false })).toBe(
        "15.678",
      );
    });
  });

  describe("should return input", () => {
    it("when input is number", () => {
      expect(formatPercentage(0 as any, { decimalPlaces: 2 })).toBe("0.00%");
    });

    it("when input is number", () => {
      expect(formatPercentage(0.15 as any, { decimalPlaces: 2 })).toBe(
        "15.00%",
      );
    });

    it("when input is number", () => {
      expect(formatPercentage(0.156_78 as any, { decimalPlaces: 2 })).toBe(
        "15.68%",
      );
    });

    it("when input is string", () => {
      expect(formatPercentage("0", { decimalPlaces: 2 })).toBe("0.00%");
    });

    it("when input is string", () => {
      expect(formatPercentage("0.15", { decimalPlaces: 2 })).toBe("15.00%");
    });

    it("when input is string", () => {
      expect(formatPercentage("0.15678", { decimalPlaces: 2 })).toBe("15.68%");
    });
  });

  describe("should return input", () => {
    it("when input is number", () => {
      expect(
        formatPercentage(0 as any, { decimalPlaces: 2, carrySymbol: false }),
      ).toBe("0.00");
    });

    it("when input is number", () => {
      expect(
        formatPercentage(0.15 as any, { decimalPlaces: 2, carrySymbol: false }),
      ).toBe("15.00");
    });

    it("when input is number", () => {
      expect(
        formatPercentage(0.156_78 as any, {
          decimalPlaces: 2,
          carrySymbol: false,
        }),
      ).toBe("15.68");
    });

    it("when input is string", () => {
      expect(
        formatPercentage("0", { decimalPlaces: 2, carrySymbol: false }),
      ).toBe("0.00");
    });

    it("when input is string", () => {
      expect(
        formatPercentage("0.15", { decimalPlaces: 2, carrySymbol: false }),
      ).toBe("15.00");
    });

    it("when input is string", () => {
      expect(
        formatPercentage("0.15678", { decimalPlaces: 2, carrySymbol: false }),
      ).toBe("15.68");
    });
  });
});
