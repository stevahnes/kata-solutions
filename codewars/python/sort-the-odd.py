def sort_array(source_array):
    srcLen = len(source_array)
    indices = []
    odd = []
    for i in range(0, srcLen):
        if (source_array[i]%2 != 0):
            indices.append(i)
            odd.append(source_array[i])
    odd.sort()
    inLen = len(indices)
    for i in range(0, inLen):
        source_array[indices[i]] = odd[i]
    return source_array