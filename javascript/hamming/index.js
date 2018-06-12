var Hamming = function() {};

Hamming.prototype.compute = function(first_strand, second_strand) {
  if (first_strand.length !== second_strand.length) {
    throw 'DNA strands must be of equal length.';
  }

  var count = 0;

  for (var i = 0; i < first_strand.length; i++) {
    if (first_strand[i] !== second_strand[i]) {
      count++;
    }
  }
  return count;
}

module.exports = Hamming;
