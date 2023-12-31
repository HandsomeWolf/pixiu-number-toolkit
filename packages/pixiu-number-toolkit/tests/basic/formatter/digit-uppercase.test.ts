import { describe, expect, it } from "vitest";
import { digitUppercase } from "../../../src";

describe("formatter", () => {
  it("digitUppercase", () => {
    expect(digitUppercase(123_456_789)).toBe(
      "壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元整",
    );
    expect(digitUppercase(123.45)).toBe("壹佰贰拾叁元肆角伍分");
    expect(digitUppercase(-123.45)).toBe("欠壹佰贰拾叁元肆角伍分");
  });
});
