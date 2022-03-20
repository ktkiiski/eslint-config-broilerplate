const baseConfig = require('./base');

module.exports = {
  ...baseConfig,
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier', 'plugin:react/jsx-runtime'],
  rules: {
    ...baseConfig.rules,
    // It's OK to use spreading with props
    'react/jsx-props-no-spreading': 'off',
    // TypeScript strict typing system replaces PropTypes
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // Named functions should be function definitions, and unnamed functions arrow functions
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
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
  },
};
