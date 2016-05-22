/**
 * GcjInput provides a way to get input from a list of lines that conform to
 * the Google Code Jam input style.
 * @constructor
 * @param {Array} lines - A list of lines that make up the input.
 */
function GcjInput(lines) {
  this.lines = lines;
  this.i = 0;
}

/**
 * getInt returns a single int from the current line.
 * It expects that the line contains nothing but the int.
 * @return {int} The int that appears on the current line.
 */
GcjInput.prototype.getInt = function () {
  return parseInt(this.lines[this.i++]);
};

/**
 * getString returns the current line.
 * @return {String} The string that is the current line.
 */
GcjInput.prototype.getString = function () {
  return this.lines[this.i++];
};

/**
 * getIntArray returns an array of integers that appear on the current line.
 * The line is expected to contain 1 or more ints separated by a space.
 * @return {Array} An array of the ints that appear on the current line.
 */
GcjInput.prototype.getIntArray = function () {
  return this.lines[this.i++].split(' ').map(function (n) {
    return parseInt(n);
  });
};

/**
 * consumeLine consumes the current line.
 */
GcjInput.prototype.consumeLine = function () {
  this.i++;
};

module.exports = GcjInput;
