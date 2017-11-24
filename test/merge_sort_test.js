const assert = require('chai').assert;
const mergeSort = require('../lib/merge_sort');

describe('Merge Sort', function() {
  it ('returns a sorted array', function() {
    var unsorted = ['d', 'a', 'c', 'b'];
    var sorted = ['a', 'b', 'c', 'd'];

    assert.deepEqual(mergeSort(unsorted), sorted);
  });

  it('returns an array of sorted values with dupes', function() {
    var unsorted = ['a', 'd', 'c', 'a', 'b'];
    var sorted = ['a', 'a', 'b', 'c', 'd'];

    assert.deepEqual(mergeSort(unsorted), sorted);
  });

  it('returns same array for array of one item', function() {
    assert.deepEqual(mergeSort(['a']), ['a']);
  });

  it('returns an empty array if given an empty array', function() {
    assert.deepEqual(mergeSort([]), []);
  });
});
