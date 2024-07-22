import { describe, expect, it } from '@jest/globals';
import { cidrCalculator, isIpInRange } from '../../src';


describe('cidrCalculator', () => {
  it('should calculate the network address correctly', () => {
    const result = cidrCalculator('192.168.1.1', 24);
    expect(result.networkAddress).toBe('192.168.1.0');
  });

  it('should calculate the broadcast address correctly', () => {
    const result = cidrCalculator('192.168.1.1', 24);
    expect(result.broadcastAddress).toBe('192.168.1.255');
  });

  it('should calculate the first usable IP correctly', () => {
    const result = cidrCalculator('192.168.1.1', 24);
    expect(result.firstUsableIp).toBe('192.168.1.1');
  });

  it('should calculate the last usable IP correctly', () => {
    const result = cidrCalculator('192.168.1.1', 24);
    expect(result.lastUsableIp).toBe('192.168.1.254');
  });

  it('should calculate the total number of IPs correctly', () => {
    const result = cidrCalculator('192.168.1.1', 24);
    expect(result.totalIps).toBe(256);
  });

  it('should calculate the number of usable IPs correctly', () => {
    const result = cidrCalculator('192.168.1.1', 24);
    expect(result.usableIps).toBe(254);
  });

  it('should calculate the subnet mask correctly', () => {
    const result = cidrCalculator('192.168.1.1', 24);
    expect(result.subnetMask).toBe('255.255.255.0');
  });
});

describe('isIpInRange', () => {
  it('validates IP addresses within the range', () => {
    // 测试一个IP地址在CIDR范围内的案例
    expect(isIpInRange('192.168.1.10', '192.168.1.0', 24)).toBe(true);
    expect(isIpInRange('192.168.1.254', '192.168.1.0', 24)).toBe(true);
  });

  it('rejects IP addresses outside the range', () => {
    // 测试一个IP地址不在CIDR范围内的案例
    expect(isIpInRange('192.168.2.1', '192.168.1.0', 24)).toBe(false);
    expect(isIpInRange('192.168.0.1', '192.168.1.0', 24)).toBe(false);
  });

  it('handles edge cases', () => {
    // 测试边界情况，例如网络地址和广播地址
    expect(isIpInRange('192.168.1.0', '192.168.1.0', 24)).toBe(true); // 网络地址
    expect(isIpInRange('192.168.1.255', '192.168.1.0', 24)).toBe(true); // 广播地址
  });

  it('checks for invalid IP addresses', () => {
    // 测试无效的IP地址
    expect(() => isIpInRange('invalid-ip', '192.168.1.0', 24)).toThrow(Error);
    expect(() => isIpInRange('192.168.1.10', 'invalid-ip', 24)).toThrow(Error);
  });

  it('checks for invalid CIDR values', () => {
    // 测试无效的CIDR值
    expect(() => isIpInRange('192.168.1.10', '192.168.1.0', -1)).toThrow(Error);
    expect(() => isIpInRange('192.168.1.10', '192.168.1.0', 33)).toThrow(Error);
  });
});
