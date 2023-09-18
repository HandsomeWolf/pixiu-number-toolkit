import { addThousandSeparator, computeExpression } from "../../../index";

// Define the Column interface (定义 Column 接口)
interface Column {
  property: string;
}

// Define the properties for the summary method (定义 summary 方法的属性)
interface SummaryMethodProperties {
  columns: Column[];
  data: [];
}

// Define the options for the summary row (定义 summary row 的选项)
interface Options {
  totalCostLabel?: string;
  excludeColumns?: string[];
  includeColumns?: string[];
  currency?: string;
  placeholder?: string;
  decimalPlaces?: number;
  useThousandSeparator?: boolean;
  columnOptions?: {
    [key: string]: {
      decimalPlaces?: number;
      currency?: string;
      placeholder?: string;
      useThousandSeparator?: boolean;
    };
  };
}

export const summaryRowForElementPlus = (
  parameter: SummaryMethodProperties,
  options: Options = {},
) => {
  const { columns, data } = parameter;
  const {
    totalCostLabel = "Total Cost",
    excludeColumns = [],
    includeColumns,
    currency = "",
    placeholder = "",
    decimalPlaces,
    useThousandSeparator = false,
    columnOptions = {},
  } = options;
  const sums: string[] = [];

  for (const [index, column] of columns.entries()) {
    if (
      excludeColumns.includes(column.property) ||
      (includeColumns && !includeColumns.includes(column.property))
    ) {
      sums[index] = placeholder;
      continue;
    }
    if (index === 0) {
      sums[index] = totalCostLabel;
      continue;
    }
    const values = data.map((item) => Number(item[column.property]));
    let sum = "";
    const columnDecimalPlaces =
      columnOptions[column.property]?.decimalPlaces ?? decimalPlaces;
    const columnCurrency = columnOptions[column.property]?.currency ?? currency;
    const columnPlaceholder =
      columnOptions[column.property]?.placeholder ?? placeholder;
    const columnUseThousandSeparator =
      columnOptions[column.property]?.useThousandSeparator ??
      useThousandSeparator;
    for (const value_ of values) {
      const value = Number(value_);
      if (!Number.isNaN(value)) {
        sum = computeExpression(`${sum} + ${value}`, {
          decimalPlaces: columnDecimalPlaces,
        });
      }
    }
    if (columnUseThousandSeparator) {
      sum = addThousandSeparator(sum) as string;
    }
    sums[index] = values.every((value) => Number.isNaN(value))
      ? columnPlaceholder
      : `${columnCurrency} ${sum}`;
  }

  return sums;
};
