import {describe, it, expect} from '@jest/globals'
import { addThousandSeparator } from "../../../src";

describe("formatter", () => {
  it("addThousandSeparator", () => {
    expect(addThousandSeparator(null as any)).toBe(null);
    expect(addThousandSeparator(null as any, true)).toBe("null");
    expect(addThousandSeparator(undefined as any)).toBe(undefined);
    expect(addThousandSeparator(undefined as any, true)).toBe("undefined");
    expect(addThousandSeparator(0)).toBe(0);
    expect(addThousandSeparator(0, true)).toBe("0");
    expect(addThousandSeparator(1.123)).toBe("1.123");
    expect(addThousandSeparator(-1.123)).toBe("-1.123");
    expect(addThousandSeparator(123_456_789.123)).toBe("123,456,789.123");
    expect(addThousandSeparator(-123_456_789)).toBe("-123,456,789");
    expect(addThousandSeparator(123_456_789, true)).toBe("123,456,789");
    expect(addThousandSeparator(-123_456_789, true)).toBe("-123,456,789");
    expect(addThousandSeparator("123456789")).toBe("123,456,789");
    expect(addThousandSeparator("-123456789")).toBe("-123,456,789");
    expect(addThousandSeparator("123456789", true)).toBe("123,456,789");
    expect(addThousandSeparator("123,456,789")).toBe("123,456,789");
    expect(addThousandSeparator("123,456,789", true)).toBe("123,456,789");
    expect(addThousandSeparator("", true)).toBe("");
    expect(addThousandSeparator("abc", true)).toBe("abc");
  });
});
