const eslint = {
	'no-var': 2,
	'prefer-const': [
		2,
		{
			destructuring: 'all',
		},
	],
	strict: 0,
	semi: [
		2,
		'always',
	],
	'comma-dangle': [
		2,
		'always-multiline',
	],
	indent: [
		2,
		'tab',
	],
	quotes: [2, 'single'],
	'no-dupe-args': 2,
	'no-dupe-keys': 2,
	'no-invalid-regexp': 2,
	'no-func-assign': 2,
	'no-sparse-arrays': 2,
	'no-unreachable': 2,
	'no-unsafe-negation': 2,
	'use-isnan': 2,
	'valid-typeof': 2,
	'no-duplicate-case': 2,
	'accessor-pairs': 2,
	'block-scoped-var': 2,
	complexity: [
		2, 
		{ max: 20 },
	],
	curly: [
		2,
		'multi',
	],
	'dot-notation': 2,
	'no-caller': 2,
	'no-case-declarations': 2,
	'no-else-return': 2,
	'no-empty-pattern': 2,
	'no-eq-null': 2,
	'no-eval': 2,
	'no-extend-native': [
		2,
		{
			exceptions: [
				'Object',
			],
		},
	],
	'no-extra-bind': 2,
	'no-fallthrough': 2,
	'no-global-assign': 2,
	'no-implied-eval': 2,
	'no-loop-func': 2,
	'no-multi-spaces': 2,
	'no-multi-str': 2,
	'no-native-reassign': 2,
	'no-new-func': 2,
	'no-new-wrappers': 2,
	'no-new': 2,
	'no-octal-escape': 2,
	'no-octal': 2,
	'no-proto': 2,
	'no-redeclare': 2,
	'no-script-url': 2,
	'no-self-assign': 2,
	'no-self-compare': 2,
	'no-unused-expressions': [
		2,
		{
			allowShortCircuit: true,
			allowTernary: true,
		},
	],
	'no-useless-escape': 2,
	'no-useless-call': 2,
	'no-useless-concat': 2,
	'no-void': 2,
	'no-warning-comments': [
		2,
		{
			terms: [
				'todo',
			],
			location: 'anywhere',
		},
	],
	'no-with': 2,
	radix: 2,
	'wrap-iife': [
		2,
		'inside',
	],
	yoda: 2,
	'no-catch-shadow': 2,
	'no-delete-var': 2,
	'no-shadow-restricted-names': 2,
	'no-shadow': [
		2,
		{
			builtinGlobals: true,
		},
	],
	'no-undef-init': 2,
	'no-unused-vars': 2,
	'no-use-before-define': 2,
	'brace-style': 2,
	camelcase: 2,
	'comma-spacing': [
		2,
		{
			before: false,
			after: true,
		},
	],
	'comma-style': [
		2,
		'last',
	],
	'eol-last': 2,
	'computed-property-spacing': [
		2,
		'never',
	],
	'key-spacing': [
		2,
		{
			beforeColon: false,
			afterColon: true,
			mode: 'minimum',
		},
	],
	'linebreak-style': [
		2,
		'unix',
	],
	'max-depth': 2,
	'max-len': [
		1,
		80,
		2,
	],
	'max-nested-callbacks': [
		2,
		3,
	],
	'max-params': [
		2,
		3,
	],
	'new-parens': 2,
	'no-array-constructor': 2,
	'no-bitwise': 2,
	'no-continue': 2,
	'no-lonely-if': 2,
	'no-multiple-empty-lines': [
		2,
		{
			max: 1,
		},
	],
	'no-new-object': 2,
	'no-unneeded-ternary': 2,
	'one-var': [
		2,
		'never',
	],
	'operator-assignment': [
		2,
		'always',
	],
	'operator-linebreak': [
		2,
		'none',
		{
			overrides: {
				'?': 'before',
				':': 'before',
				'&&': 'before',
				'||': 'before',
				'=': 'ignore',
			},
		},
	],
	'quote-props': [
		2,
		'as-needed',
	],
	'space-before-blocks': 2,
	'space-before-function-paren': [
		2,
		'never',
	],
	'keyword-spacing': [
		2,
		{
			before: true,
			after: true,
		},
	],
	'space-infix-ops': 2,
	'space-unary-ops': [
		1,
		{
			words: true,
			nonwords: false,
		},
	],
	'spaced-comment': [
		2,
		'always',
		{
			exceptions: [
				'*',
			],
		},
	],
	'arrow-body-style': [
		2,
		'as-needed',
	],
	'arrow-spacing': 2,
	'constructor-super': 2,
	'no-class-assign': 2,
	'no-const-assign': 2,
	'no-dupe-class-members': 2,
	'no-duplicate-imports': 2,
	'no-this-before-super': 2,
	'object-shorthand': 2,
	'prefer-arrow-callback': 2,
	'prefer-spread': 2,
	'dot-location': [
		2,
		'property',
	],
};

const react = {
	'react/jsx-uses-vars': 2,
};

const flow = {
	'flowtype/boolean-style': [
		2,
		'boolean',
	],
	'flowtype/define-flow-type': 1,
	'flowtype/delimiter-dangle': [
		2,
		'always-multiline',
	],
	'flowtype/generic-spacing': [
		2,
		'never',
	],
	'flowtype/no-dupe-keys': 2,
	'flowtype/no-weak-types': 2,
	'flowtype/require-return-type': [
		2,
		{
			excludeArrowFunctions: 'expressionsOnly',
		},
	],
	'flowtype/require-valid-file-annotation': [
		2,
		{
			annotationStyle: 'line',
		},
	],
	'flowtype/semi': [
		2,
		'always',
	],
	'flowtype/space-after-type-colon': [
		2,
		'always',
	],
	'flowtype/space-before-generic-bracket': [
		2,
		'never',
	],
	'flowtype/space-before-type-colon': [
		2,
		'never',
	],
	'flowtype/type-id-match': [
		2,
		'^([A-Z][a-z0-9]+)+Type$',
	],
	'flowtype/union-intersection-spacing': [
		2,
		'always',
	],
	'flowtype/use-flow-type': 1,
	'flowtype/valid-syntax': 1,
	'header/header': [2, 'line', ' @flow'],
};

const modules = {
	eslint,
	react,
	flow,
};

export default ({modules: selectedModules}) => ({
	parser: 'babel-eslint',
	env: {
		es6: true,
	},
	plugins: [
		'react',
		'flowtype',
		'header',
	],
	rules: selectedModules.reduce((curr, module) => 
		(Object.assign(curr, modules[module]), curr)
	, {}),
});
