interface NumberDictionary {
  [key: string]: number;
}

type IOType = number | string | null | undefined;

export interface RegexOptions {
  // 是否进行全字符串匹配。为true时，使边界字符`^`和`$`可以匹配文本的开始和结束，以及多行文本中的行开始和行结束。
  // 当您处理的是多行文本，且希望`^`和`$`能够分别匹配每一行的开始和结束时，该标志会非常有用。
  strict?: boolean;
  // 是否全局搜索。为false时，正则表达式在找到第一个匹配项后就会停止搜索。为true时，正则表达式会继续搜索直到文本末尾，找到所有匹配项。
  // 当您想要在字符串中搜索或提取所有匹配项时，可以使用该标志。
  global?: boolean;
  // 是否忽略大小写。如果您希望您的正则表达式匹配时不区分大小写，可以使用该标志。
  ignoreCase?: boolean;
  // 是否多行匹配
  multiLine?: boolean;
  // 是否允许.匹配换行符。在JavaScript中，默认情况下`.`不匹配换行符（`\n`）。
  // 为true时`.`将匹配任何字符，包括换行符。如果您需要`.`匹配包括换行符在内的任何字符，该标志会帮到您。
  dotAll?: boolean;
  // 是否启用Unicode模式。启用完整的Unicode匹配。
  // 这对于处理大于`\uFFFF`的Unicode字符非常有用，例如表情符号。
  // 处理包含Unicode字符（如表情符号）的字符串时，该标志是必需的。
  unicode?: boolean;
  // 是否“粘连”搜索。为true时，匹配必须从目标字符串的当前位置开始。当您需要从特定位置开始搜索，并且匹配必须发生在那个确切位置时，该标志是合适的选择。
  sticky?: boolean;
}
