module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
	'airbnb-typescript',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'react',
	'react-hooks',
	'@typescript-eslint',
    'prettier'
  ],
  rules: {
	'no-underscore-dangle': 'off',
	'react/prop-types': 'off',
	'react/require-default-props': 'off',
	'react/jsx-props-no-spreading': 'off',
	"react/function-component-definition": [
		"error",
			{
				"namedComponents": ["function-declaration", "arrow-function"],
				"unnamedComponents": "arrow-function"
			}
		],
	"react/no-unstable-nested-components": [
		"warn",
		{ "allowAsProps": true }
	],
	'no-irregular-whitespace': 'off',
	'import/prefer-default-export': 'off',
	'import/no-extraneous-dependencies': [
		'error',
		{ devDependencies: ['**/*.test.tsx', '**/*.test.ts', 'jest.setup.ts'] },
	],
	'import/no-cycle': 'warn',
	'react-hooks/exhaustive-deps': 'warn',
	'@typescript-eslint/no-unused-vars': 'error'
  },
	ignorePatterns: ['.eslintrc.js', '*.config.js']
};