import {describe, it, expect} from '@jest/globals'
import { formatCurrencyRenminbi } from "../../../src";

describe("formatter", () => {
  it("formatCurrencyRenminbi", () => {
    expect(formatCurrencyRenminbi(123_456_789)).toBe("¥123,456,789.00");
  });
});
