# Math

If you are calculating very complex formulas, please use [compute expression](/guide/compute-expression.html)

## Description

The math module provides a set of functions for performing various mathematical operations. It includes functions for arithmetic, probability, and relational operations.

## Functions

### Arithmetic

- add(...values: (number | string)[]): number: Adds all the input values.
- subtract(...values: (number | string)[]): number: Subtracts all the input values from the first value.
- multiply(...values: (number | string)[]): number: Multiplies all the input values.
- divide(...values: (number | string)[]): number: Divides the first value by all the other input values.
- modulo(value: number, divisor: number): number: Returns the remainder of the division of the value by the divisor.
- round(value: number, decimalPlaces: number = 0): number: Rounds the value to the nearest integer or decimal place.
- ceil(value: number): number: Rounds the value up to the nearest integer.
- floor(value: number): number: Rounds the value down to the nearest integer.

### Probability

- pickRandom(value: any[]): number: Returns a random element from the input array.
- random(min?: number, max?: number): number: Returns a random number between min and max. If only one parameter is provided, it returns a random number between 0 and the provided number.
- randomInt(min: number, max?: number): number: Returns a random integer between min and max. If only min is provided, it returns a random integer between 0 and min.

### Relational

- equal(x: number | string, y: number | string): boolean: Checks if x is equal to y.
- unequal(x: number | string, y: number | string): boolean: Checks if x is not equal to y.
- larger(x: number | string, y: number | string): boolean: Checks if x is larger than y.
- largerEq(x: number | string, y: number | string): boolean: Checks if x is larger than or equal to y.
- smaller(x: number | string, y: number | string): boolean: Checks if x is smaller than y.
- smallerEq(x: number | string, y: number | string): boolean: Checks if x is smaller than or equal to y.

## Notes

- All functions throw a TypeError if the input parameters are not numbers or string numbers.
- The add, subtract, multiply, and divide functions require at least two parameters.
- The random and randomInt functions return a random number between 0 and 1 if no parameters are provided.
- The equal, unequal, larger, largerEq, smaller, and smallerEq functions return a boolean value.
Usage

In these examples, various mathematical operations are performed using the functions provided by the math module.
