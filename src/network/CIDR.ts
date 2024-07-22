import { add, subtract, multiply, divide } from '../index';
import { pow } from 'mathjs';
import { isValidIPv4 } from '../validation';

// 将 IP 地址转换为数字
function ipToNumber(ip: string) {
  if (isValidIPv4(ip)) {
    return ip.split('.').reduce((acc, octet) => add(multiply(acc, 256), parseInt(octet)), 0);
  } else {
    throw new Error('Invalid IP address');
  }
}

// 将数字转换为 IP 地址
function numberToIp(num: number) {
  return [
    divide(num, Number(pow(256, 3))) & 255,
    divide(num, Number(pow(256, 2))) & 255,
    divide(num, 256) & 255,
    num & 255,
  ].join('.');
}

// 计算子网掩码
function calculateSubnetMask(cidrBits: number) {
  return subtract(Number(pow(2, 32)), Number(pow(2, subtract(32, cidrBits))));
}
// 计算网络地址
function calculateNetworkAddress(ip: string, cidrBits: number) {
  const ipNum = ipToNumber(ip);
  const mask = calculateSubnetMask(cidrBits);
  return numberToIp(ipNum & mask);
}

// 计算广播地址
function calculateBroadcastAddress(ip: string, cidrBits: number) {
  const ipNum = ipToNumber(ip);
  const mask = calculateSubnetMask(cidrBits);
  return numberToIp(ipNum | ~mask);
}

// 计算可用 IP 地址范围
function calculateIpRange(ip: string, cidrBits: number) {
  const networkAddress = calculateNetworkAddress(ip, cidrBits);
  const broadcastAddress = calculateBroadcastAddress(ip, cidrBits);
  const firstUsable = numberToIp(add(ipToNumber(networkAddress), 1));
  const lastUsable = numberToIp(subtract(ipToNumber(broadcastAddress), 1));
  return { firstUsable, lastUsable };
}

// 计算子网中的总 IP 地址数
function calculateTotalIps(cidrBits: number) {
  return Number(pow(2, subtract(32, cidrBits)));
}

// 计算可用 IP 地址数（排除网络地址和广播地址）
function calculateUsableIps(cidrBits: number) {
  return subtract(calculateTotalIps(cidrBits), 2);
}

// 检查 IP 是否在给定的 CIDR 范围内
export function isIpInRange(ip: string, cidrIp: string, cidrBits: number) {
  const ipNum = ipToNumber(ip);
  const cidrIpNum = ipToNumber(cidrIp);
  const mask = calculateSubnetMask(cidrBits);
  return (ipNum & mask) === (cidrIpNum & mask);
}
export function cidrCalculator(ip: string, cidrBits: number) {
  const networkAddress = calculateNetworkAddress(ip, cidrBits);
  const broadcastAddress = calculateBroadcastAddress(ip, cidrBits);
  const { firstUsable, lastUsable } = calculateIpRange(ip, cidrBits);
  const totalIps = calculateTotalIps(cidrBits);
  const usableIps = calculateUsableIps(cidrBits);

  return {
    networkAddress,
    broadcastAddress,
    firstUsableIp: firstUsable,
    lastUsableIp: lastUsable,
    totalIps,
    usableIps,
    subnetMask: numberToIp(calculateSubnetMask(cidrBits)),
  };
}
