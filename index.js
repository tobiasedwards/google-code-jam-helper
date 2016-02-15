var readline = require('readline');
var GcjInput = require('./lib/gcj-input');

function loadLines(input, callback) {
  var rl = readline.createInterface({ input: input });

  lines = [];
  rl.on('line', function (line) {
    lines.push(line);
  });

  rl.on('close', function () {
    callback(lines);
  });
}

var gcj = function (solution, options) {
  options = options || {};
  options.input = options.input || process.stdin;
  options.output = options.output || process.stdout;

  loadLines(options.input, function (lines) {
    var input = new GcjInput(lines);
    var numCases = input.getInt();

    for (var i = 0; i < numCases; i++) {
      var output = 'Case #' + (i + 1) + ': ' + solution(input) + '\n';
      options.output.write(output);
    }
  });
};

exports = gcj;
