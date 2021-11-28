module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // It's OK to use spreading with props
    'react/jsx-props-no-spreading': 'off',
    // TypeScript strict typing system replaces PropTypes
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // Expected to use several indirectly installed dependencies, so turning this off
    'import/no-extraneous-dependencies': 'off',
    // Functions may be used before usage
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
        enums: true,
        typedefs: false,
      },
    ],
    // Named functions should be function definitions, and unnamed functions arrow functions
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    // Allow methods that do not use this
    'class-methods-use-this': 'off',
    // Allow using for...of
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // It's enought that <label> have EITHER htmlFor or nested inputs
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
    // Stricter import sorting to achieve consistent/deterministic ordering
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        'groups': [['builtin', 'external', 'internal']],
        'newlines-between': 'never',
        'alphabetize': { order: 'asc' },
      },
    ],
  },
};
