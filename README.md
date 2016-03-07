# google-code-jam-helper
An npm module to deal with the repetitive input/output elements of solving Google Code Jam problems in JavaScript.

Google Code Jam problems involve reading in multiple lines of input for a number of cases for any given problem. This module provides an easy interface for dealing with this input and output in Javascript, an otherwise repetitive task.

## Usage

This module provides a `gcj()` function which takes in a `solution` function. The `solution` function is then given an instance of the `GcjInput` class used to access the input for each case.

The `solution` function is called once for each case and is expected to return the result of the case.

### Example

An example of a problem may be the task to find the `n`th integer in a sequence of `m` numbers. The number of cases will be `T`, which will appear on the first line of the input file. Each case will contain three lines in the following format:

```
n
m
space separated numbers
```

Output is required in the format:

```
Case #n: result
```

So for this problem an input file may look like

```
2
1
3
10 18 9
0
2
1 2
```

And the expected output would be

```
Case #1: 18
Case #2: 1
```

To solve this problem using the `gcj` function you could write the following program:

```javascript
var gjc = require('google-code-jam-helper');

gcj(function (input) {
  var n = input.getInt();

  // Consume the next line as we don't need to rely on the
  // length of the array (m)
  input.consumeLine();

  var nums = line.getIntArray();

  return nums[n];
});
```

### API

### `gcj(solution, options, done)`
The `solution` function is called once for each case and provided an instance of `GcjInput`. It is expected to return the result of each case.

The `options` object can contain `input` and `output`, instances of `stream.Readable` and `stream.Writeable` respectively. `stdin` and `stdout` are used by default.

The `done` callback is called once all cases are completed.

### `GcjInput`
The `GcjInput` class provides a simple way to access the data given as input for each case.

#### `GcjInput#getInt()`
`getInt` returns a single int from the current line.
It expects that the line contains nothing but the int.

#### `GcjInput#getIntArray()`
`getIntArray` returns an array of integers that appear on the current line.
The line is expected to contain 1 or more ints separated by a space.

#### `GcjInput#consumeLine()`
`consumeLine` consumes the current line.

## Todos
- [x] Add better description to README
- [ ] Publish package to npm registry
- [ ] Add installation instructions
- [x] Add usage instructions and example
- [ ] Add contribution instructions and test commands
- [ ] Add end to end testing for `gcj()` function
