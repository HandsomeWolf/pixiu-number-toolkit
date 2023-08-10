# num-utils Documentation

num-utils is a collection of number utilities written in TypeScript. It provides a set of functions for number conversion, finance calculations, formatting, and math operations. It also includes utilities for Vue's Element Plus library.

For more detailed documentation, visit [documentation](https://handsomewolf.github.io/num-utils/).



## Installation

To install `num-utils`, use the following command:

```command
npm install @handsomewolf/num-utils
```

## Usage

Import the required utilities from the package:

```TypeScript
import {
  digitUppercase,
  calculateGrossAmount,
  addThousandSeparator,
  computeExpression,
  isNumeric,
  getDecimalInfo,
  formatDecimalForElementPlus,
  isInRangeForElementPlus
} from "@handsomewolf/num-utils"

```
## Utilities
### Basic Utilities

| Function Name | Description |
| --- | --- |
| digitUppercase | Converts a number to uppercase. |
| calculateGrossAmount | Calculates the gross amount. |
| addThousandSeparator | Adds a thousand separator to a number. |
| computeExpression | Computes a mathematical expression. |
| isNumeric | Checks if a value is numeric. |
| getDecimalInfo | Gets decimal information of a number. |

### Element Plus Utilities

| Function Name | Description |
| --- | --- |
| formatDecimalForElementPlus | Formats a decimal number for Element Plus. |
| isInRangeForElementPlus | Checks if a number is in a specific range for Element Plus. |


## Contributing

Contributions are welcome. Please submit a pull request or create an issue to contribute to the project.
