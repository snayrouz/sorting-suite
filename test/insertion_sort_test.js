const assert = require('chai').assert;
const insertionSort = require('../lib/insertion_sort');

describe('Insertion Sort', function() {
  it('returns an array of sorted values', function() {
    var unsorted = ['a', 'd', 'c', 'b'];
    var sorted = ['a', 'b', 'c', 'd'];

    assert.deepEqual(insertionSort(unsorted), sorted);
  });

  it('returns an array of sorted values with dupes', function() {
    var unsorted = ['a', 'd', 'c', 'a', 'b'];
    var sorted = ['a', 'a', 'b', 'c', 'd'];

    assert.deepEqual(insertionSort(unsorted), sorted);
  });

  it('returns the original if given only one value', function() {
    assert.deepEqual(insertionSort(['a']), ['a']);
  });

  it('returns an empty array if given empty array', function() {
    assert.deepEqual(insertionSort([]), []);
  });
});
