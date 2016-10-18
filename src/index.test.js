import test from 'ava';

import createLinter from './';

test('Smoke test for packages', t => {
	const linter = createLinter({modules: ['eslint', 'flow']});
	const ruleCount = Object.keys(linter.rules).length;

	t.truthy(ruleCount);
});
