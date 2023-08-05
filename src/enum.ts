export interface AnswerObject {
  eslintStatus: boolean;
  prettierStatus: boolean;
}

// download 报错信息
// TYPO
export interface DowloadError {
  statusCode: number;
}

// 模板组
export enum TEMPLATE_GROUP {
  'vue' = 'vue',
  'default' = 'vue',
  'react' = 'react',
}

// 报错信息
export enum ERROR {
  // TYPO
  TEMPLAT_EERROR = 'Built-in templates include react, vue, default. Of course, we also support passing in template addresses',
}

export interface AnswerOptions {
  mergePath: string;
  tsStatus: Boolean;
  eslintStatus: Boolean;
  prettierStatus: Boolean;
  lintStatus: Boolean;
  cssStatus: string;
  constructStatus: string;
}

// 问题选项组
export const QUESTION_GROUP = [
  {
    type: 'input',
    message: '请输入拉取的分支，默认为main',
    name: 'mergePath',
  },
  {
    type: 'confirm',
    message: '是否开启 typeScript 功能',
    name: 'tsStatus',
  },
  {
    type: 'confirm',
    message: '是否开启 eslint 功能',
    name: 'eslintStatus',
  },
  {
    type: 'confirm',
    message: '是否开启 prettier 功能',
    name: 'prettierStatus',
  },
  {
    type: 'confirm',
    message: '是否开启 lint-staged 功能',
    name: 'lintStatus',
    when(answer: AnswerObject) {
      return answer.eslintStatus && answer.prettierStatus;
    },
  },
  {
    type: 'list',
    message: '选择 css 处理器',
    name: 'cssStatus',
    choices: ['none', 'less', 'stylus', 'sass', 'postcss'],
  },
  {
    type: 'list',
    message: '选择构建工具',
    name: 'constructStatus',
    choices: ['none', 'webpack', 'vite', 'rollup'],
  },
];

// action 方法中关于 cmd 的接口定义
export interface CmdOptions {
  template: string;
}
