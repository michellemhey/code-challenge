# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(first_strand, second_strand):
    hamming = 0

    if len(first_strand) != len(second_strand):
      raise ValueError()

    for x, y in zip(first_strand, second_strand):
        if x != y:
            hamming +=1
    return hamming
