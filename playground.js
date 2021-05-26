import { Set } from './src/set.js';

const set = new Set();

set.add({'food': 'potato'});
console.log(set.has({food: 'potato'}));
console.log(set.values())
