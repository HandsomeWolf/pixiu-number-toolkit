import { computeExpression } from '../index';

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const scales = ['', 'thousand', 'million', 'billion', 'trillion'];
const MAX_SAFE_INTEGER = 1_000_000_000_000; // 1 trillion

/**
 * Convert number to words in English.
 * 将数字转换为英文表示的文字
 *
 * @param number_ - The number to convert (要转换的数字)
 * @returns The number in words (文字形式的数字)
 */
export function numberToEnglishCharacter(number_: number): string {
    if (Math.abs(number_) >= MAX_SAFE_INTEGER) {
        throw new Error('Input must be between -1 trillion and 1 trillion');
    }

    if (number_ === 0) return 'zero';

    const isNegative = number_ < 0;
    number_ = Math.abs(number_);

    const integerPart = Math.floor(number_);
    const decimalPart = Number(computeExpression(`${number_} - ${integerPart}`));

    let words = integerPart === 0 ? 'zero' : convertInteger(integerPart);

    if (decimalPart > 0) {
        words += ` point ${convertDecimal(decimalPart)}`;
    }

    return isNegative ? `negative ${words}` : words;
}

function convertInteger(number_: number): string {
    if (number_ === 0) return '';

    let words = '';

    // Process each group of 3 digits
    for (let i = 0; number_ > 0; i++) {
        const chunk = number_ % 1000;

        if (chunk !== 0) {
            const chunkWords = convertChunk(chunk);
            words = chunkWords + (i > 0 ? ` ${scales[i]} ` : '') + words;
        } else if (i > 0 && words !== '') {
            // Don't add scale for zero chunks
        }

        number_ = Math.floor(number_ / 1000);
    }

    return words.trim();
}

function convertChunk(number_: number): string {
    if (number_ === 0) return '';

    let words = '';

    // Handle hundreds
    if (number_ >= 100) {
        words += `${ones[Math.floor(number_ / 100)]} hundred`;
        number_ %= 100;
        if (number_ > 0) {
            words += ' and ';
        }
    }

    // Handle tens and ones
    if (number_ > 0) {
        if (number_ < 20) {
            words += ones[number_];
        } else {
            words += tens[Math.floor(number_ / 10)];
            const onesDigit = number_ % 10;
            if (onesDigit > 0) {
                words += `-${ones[onesDigit]}`;
            }
        }
    }

    return words;
}

function convertDecimal(decimal: number): string {
    const decimalStr = decimal.toString().slice(2); // Remove "0."
    return decimalStr.split('').map(digit => {
        return digit === '0' ? 'zero' : ones[parseInt(digit, 10)];
    }).join(' ');
}

/**
 * Convert English words to number.
 * 将英文单词转换为数字
 *
 * @param text - The English words to convert (要转换的英文单词)
 * @returns The number (数字)
 */
export function englishCharacterToNumber(text: string): number {
    text = text.toLowerCase().trim();

    if (text === 'zero') return 0;

    let isNegative = false;
    if (text.startsWith('negative ')) {
        isNegative = true;
        text = text.substring(9);
    }

    // Handle decimal part
    const parts = text.split(' point ');
    const integerWords = parts[0];
    const decimalWords = parts.length > 1 ? parts[1] : '';

    let integerValue = parseIntegerWords(integerWords);
    let decimalValue = 0;

    if (decimalWords) {
        const decimalDigits = decimalWords.split(' ').map(word => {
            if (word === 'zero') return 0;
            return ones.indexOf(word);
        });

        let decimalStr = decimalDigits.join('');
        decimalValue = Number(`0.${decimalStr}`);
    }

    const result = integerValue + decimalValue;
    return isNegative ? -result : result;
}

function parseIntegerWords(text: string): number {
    // Remove 'and' and replace hyphens with spaces
    text = text.replace(/ and /g, ' ').replace(/-/g, ' ');
    const words = text.split(' ').filter(word => word !== '');

    let result = 0;
    let currentNumber = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word === 'hundred') {
            currentNumber *= 100;
        } else if (scales.includes(word)) {
            const scale = scales.indexOf(word);
            currentNumber *= Math.pow(1000, scale);
            result += currentNumber;
            currentNumber = 0;
        } else if (ones.includes(word)) {
            currentNumber += ones.indexOf(word);
        } else if (tens.includes(word)) {
            currentNumber += tens.indexOf(word) * 10;
        }
    }

    return result + currentNumber;
}
