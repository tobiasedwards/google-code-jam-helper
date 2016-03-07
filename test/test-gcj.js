var assert = require('assert');
var stream = require('stream');
var gcj = require('../index');

describe('gcj()', function () {
  it('should print the correct output', function (done) {
    var solution = function (input) {
      var sum = 0;
      input.getIntArray().forEach(function (n) {
        sum += n;
      });
    };

    var input = new stream.Readable();
    input.push('2\n');
    input.push('23 1 41\n');
    input.push('1 12 9 2 3\n');
    input.push(null);

    var output = new stream.Writable();
    var outputStr = '';

    output.on('read', function (chunk) {
      outputStr += chunk;
    });

    output.on('close', function () {
      var expected = 'Case #1: 65\n' +
        'Case #2: 21\n';

      assert.equal(expected, outputStr);
      done();
    });

    gcj(solution, { input: input, output: output }, function () {
      console.log(output.toString());
    });
  });
});
