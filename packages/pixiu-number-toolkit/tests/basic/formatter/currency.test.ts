import { describe, expect, it } from "vitest";
import { formatCurrencyRenminbi } from "../../../src";

describe("formatter", () => {
  it("formatCurrencyRenminbi", () => {
    expect(formatCurrencyRenminbi(123_456_789)).toBe("¥123,456,789.00");
  });
});
