const assert = require('power-assert');
import { Greeter } from './';

describe('Greeter', () => {
	
	it('smoke test', () => {
		assert(Greeter);
	});
	
	it('test Bob', () => {
		const g = new Greeter('Bob');
		assert('Hello, Bob' === g.greet());
	});
});