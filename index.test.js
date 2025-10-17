import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

test('Fungsi sum harus menjumlahkan dua bilangan dengan benar', async (t) => {
  // Uji bilangan positif
  await t.test('Menjumlahkan bilangan positif (3 + 5)', () => {
    const actual = sum(3, 5);
    const expected = 8;
    assert.strictEqual(actual, expected, `Expected ${expected}, but got ${actual}`);
  });

  // Uji bilangan negatif
  await t.test('Menjumlahkan bilangan negatif (-10 + 4)', () => {
    const actual = sum(-10, 4);
    const expected = -6;
    assert.strictEqual(actual, expected, `Expected ${expected}, but got ${actual}`);
  });

  // Uji dengan nol
  await t.test('Menjumlahkan dengan nol (7 + 0)', () => {
    const actual = sum(7, 0);
    const expected = 7;
    assert.strictEqual(actual, expected, `Expected ${expected}, but got ${actual}`);
  });
});
