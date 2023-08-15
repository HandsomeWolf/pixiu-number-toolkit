import { describe, expect, it } from "vitest";
import { parseIdCard } from "../../../src";

describe("parseIdCard", () => {
  describe("valid id card", () => {
    it("valid is true", () => {
      expect(parseIdCard("110105197208108139")).toStrictEqual({
        birthdate: "1972-08-10",
        gender: "男",
        region: "110105",
        valid: true,
      });
      expect(parseIdCard("11010519751030611X")).toStrictEqual({
        birthdate: "1975-10-30",
        gender: "男",
        region: "110105",
        valid: true,
      });
    });
    it("valid is false", () => {
      expect(parseIdCard("11010119900307861X")).toStrictEqual({
        birthdate: "",
        gender: "",
        region: "",
        valid: false,
      });
    });
  });
});
