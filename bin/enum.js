// 模板组
exports.TEMPLATE_GROUP = {
  "vue": "vue",
  "default": "vue",
  "react": "react"
}

// 报错信息
exports.ERROR = {
  TEMPLAT_EERROR: "Built-in templates include react, vue, default. Of course, we also support passing in template addresses"
}

// 问题选项组
exports.QUESTION_GROUP = [
  {
    type: "confirm",
    message: "是否开启 typeScript 功能",
    name: "tsStatus",
  },
  {
    type: "confirm",
    message: "是否开启 eslint 功能",
    name: "eslintStatus",
  },
  {
    type: "confirm",
    message: "是否开启 prettier 功能",
    name: "prettierStatus",
  },
  {
    type: "confirm",
    message: "是否开启 lint-staged 功能",
    name: "lintStatus",
    when(answer) {
      return answer.eslintStatus && answer.prettierStatus;
    }
  },
  {
    type: "list",
    message: "选择 css 处理器",
    name: "cssStatus",
    choices: ["none", "less", "stylus", "sass", "postcss"]
  },
  {
    type: "list",
    message: "选择构建工具",
    name: "constructStatus",
    choices: ["none", "webpack", "vite", "rollup"]
  }
]