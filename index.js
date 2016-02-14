var readline = require('readline');
var GcjInput = require('lib/gcj-input.js');

function loadLines(callback) {
  var rl = readline.createInterface({ input: process.stdin });

  lines = [];
  rl.on('line', function (line) {
    lines.push(line);
  });

  rl.on('close', function () {
    callback(lines);
  });
}

function gcj(solution) {
  loadLines(function (lines) {
    var input = new GcjInput(lines);
    var numCases = input.getInt();

    for (var i = 0; i < numCases; i++) {
      var output = 'Case #' + (i + 1) + ': ' + solution(input);
      console.log(output);
    }
  });
}

exports = gcj;
