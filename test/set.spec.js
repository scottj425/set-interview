import Chance from 'chance';
import { Set } from '../src/set.js';
import assert from 'assert';

describe('Set functionality', () => {
    it('Should instantiate Set with no values', () => {
        const set = new Set();
        assert.deepStrictEqual(set.values(), []);
    })

    it(`Should return false if set doesn't have value`, () => {
        const chance = new Chance();
        const set = new Set();
        assert.strictEqual(set.has(chance.word()), false);
    })

    it(`Should return true if set has value`, () => {
        const chance = new Chance();
        const word = chance.word();
        const set = new Set([word]);
        assert.strictEqual(set.has(word), true);
    })

    it('Should instantiate Set with values', () => {
        const chance = new Chance();
        const array = [chance.word, chance.word(), chance.word()];
        const set = new Set(array);
        assert.deepStrictEqual(set.values(), array);
    })

    it(`Should add a value to Set that doesn't exist`, () => {
        const chance = new Chance();
        const set = new Set();
        const word = chance.word();
        const response = set.add(word);
        assert.strictEqual(response, true)
        assert.deepStrictEqual(set.values(), [word]);
    })

    it(`Shouldn't add a value to Set that doesn't exist`, () => {
        const chance = new Chance();
        const word = chance.word();
        const set = new Set([word]);
        const response = set.add(word);
        assert.strictEqual(response, false);
        assert.deepStrictEqual(set.values(), [word]);
    })
    it(`Should return values from Set`, () => {
        const chance = new Chance();
        const word = chance.word();
        const set = new Set([word]);
        const response = set.add(word);
        assert.strictEqual(response, false);
        assert.deepStrictEqual(set.values(), [word]);
    })

    it(`Should return size of 0 for empty Set`, () => {
        const set = new Set();
        assert.deepStrictEqual(set.size(), 0);
    })

    it(`Should return size of Set`, () => {
        const chance = new Chance();
        const randomInteger = chance.integer({ min: 1, max: 20 })
        const array = Array.from(randomInteger);
        const set = new Set(array);
        assert.strictEqual(set.size(), array.length);
    })

    it(`Should clear items from Set`, () => {
        const chance = new Chance();
        const word = chance.word();
        const set = new Set([]);
        const response = set.add(word);
        assert.strictEqual(response, true);
        assert.deepStrictEqual(set.values(), [word]);
        set.clear();
        assert.deepStrictEqual(set.values(), []);
    })
});