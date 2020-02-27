def find_even_index_2(arr):
    arrLen = len(arr)
    for i in range(0, arrLen):
        if (sum(arr[0:i]) == sum(arr[i+1:arrLen+1])):
            return i
            break
    return -1

    def find_even_index_1(arr):
    arrLen = len(arr)
    for i in range(0, arrLen):
        lower = sum(arr[0:i])
        upper = sum(arr[i+1:arrLen+1])
        if (lower == upper):
            return i
            break
    return -1