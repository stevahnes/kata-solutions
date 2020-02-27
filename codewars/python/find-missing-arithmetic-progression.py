def find_missing(sequence):
    diff = sequence[1] - sequence[0]
    seqLen = len(sequence)
    for i in xrange(1,seqLen - 1):
        if (i > 0 and (sequence[i + 1] - sequence[i]) != diff):
            diff = sequence[i + 1] - sequence[i]
        else:
            break
    for i in xrange(0,seqLen - 1):
        if (sequence[i + 1] - sequence[i] != diff):
            return sequence[i] + diff
            break