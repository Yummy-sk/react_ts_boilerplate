# React CRA based boilerplate

<br/>

## 설치
---
<br/>

```bash
// 설치
yarn install

// 서버 시작
yarn start

// 빌드
yarn build
```

## 설정
---
### eslint

<br/>

lint는 기본적으로 airbnb 컨벤션을 적용하였습니다. 

```bash
// .eslintrc

  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
```

### prettier

<br/>

prettier는 기본적으로 많이 사용되는 패턴으로 적용하였습니다.

```bash
// .prettierrc
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "endOfLine": "auto",
  "jsxBracketSameLine": true,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```

### swc

기존에 바벨을 사용하던 것을 swc로 빌드하도록 변경하였습니다. 

```bash
// craco.config.js

module.exports = {
  plugins: [
    {
      plugin: {
        ...CracoSwcPlugin,
        ...
      },
      options: {
        swcLoaderOptions: {
          jsc: {
            externalHelpers: true,
            target: 'es2015',
            parser: {
              syntax: 'typescript',
              jsx: true,
              dynamicImport: true,
              exportDefaultFrom: true,
            },
          },
        },
      },
    },
  ],
};
```

<br/>

## 설치된 라이브러리
---

<br/>

- `typescript`
- `styled-components`
- `@craco/craco`
- `prettier`
- `eslint`
- `react`
- `react-error-boundary`
- `react-async-hel`

<br/>

> 수정 및 변경사항이 필요하시면 언제든지 이슈 또는 PR 남겨주세요!
