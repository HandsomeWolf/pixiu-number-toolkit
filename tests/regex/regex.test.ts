import { describe, it, expect } from '@jest/globals';
import { buildRegex, REGEX } from '../../src/constants/regex';


describe('Regex', () => {
  it('string', () => {
    const result = buildRegex(REGEX.ACCOUNT, { strict: true });
    // const test = 'lico'.match(buildRegex(REGEX.string.ACCOUNT, { strict: true }));
    // console.log(test?.[0]);
    expect(result.test('admin')).toBe(true);
  });
});
