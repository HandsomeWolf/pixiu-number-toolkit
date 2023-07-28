num-utils/
├── dist/  # 编译后的文件
├── docs/  # 文档
│   ├── CHANGELOG.md  # 版本历史和每个版本的主要更改
│   ├── FAQ.md  # 常见问题和答案
│   └── PROJECT_STRUCTURE.md  # 项目结构描述
├── examples/  # 示例代码
├── src/
│   ├── utils/  # 通用的工具函数
│   │   ├── math-helper.ts  # 数学帮助类
│   │   └── validation-utils.ts  # 验证函数
│   ├── converters/  # 转换器，如数字到字符串的转换
│   │   └── digit-to-uppercase.ts  # 数字转大写金额的转换器
│   ├── formatters/  # 格式化函数
│   │   ├── index.ts  # 入口文件
│   │   ├── add-thousand-separator.ts  # 添加千分位的格式化函数
│   │   ├── format-currency-renminbi.ts  # 格式化人民币的函数
│   │   ├── format-percentage.ts  # 格式化百分比的函数
│   │   └── remove-thousand-separator.ts  # 移除千分位的函数
│   ├── math/  # 数学相关的函数
│   │   └── math-functions.ts  # 数学函数，如计算平均值、求和等
│   └── index.ts  # 导出所有的函数
├── tests/  # 测试代码
│   ├── formatter.test.ts  # 格式化函数的测试代码
│   ├── math.test.ts  # 数学函数的测试代码
│   └── utils.test.ts  # 工具函数的测试代码
├── types/  # 类型定义
│   └── formatter-types.d.ts  # 格式化函数的类型定义
├── .editorconfig  # 编辑器配置
├── .eslintrc  # ESLint配置
├── .gitignore  # Git忽略文件配置
├── .npmignore  # npm发布排除的文件
├── LICENSE  # MIT开源许可证
├── package.json  # 项目元数据和依赖
├── README.md  # 项目介绍和使用方法
└── tsconfig.json  # TypeScript配置