var assert = require('assert');
var GcjInput = require('../lib/gcj-input');

describe('GcjInput', function () {
  describe('#getInt()', function () {
    it('should return the correct integer', function () {
      var input = new GcjInput(['42']);
      assert.equal(42, input.getInt());
    });

    it('should correctly handle negative integers', function () {
      var input = new GcjInput(['-12']);
      assert.equal(-12, input.getInt());
    });
  });

  describe('#getString()', function () {
    it('should return the current line', function () {
      var input = new GcjInput(['Foo', 'Bar']);
      assert.equal('Foo', input.getString());
    });
  });

  describe('#getIntArray()', function () {
    it('should return the correct array', function () {
      var input = new GcjInput(['1 12 4 8 -1 22']);
      assert.deepEqual([1, 12, 4, 8, -1, 22], input.getIntArray());
    });
  });

  describe('#consumeLine()', function () {
    it('should correctly discard the current line', function () {
      var input = new GcjInput(['1', '4']);
      input.consumeLine();
      assert.equal(4, input.getInt());
    });
  });
});
