def iq_test_2(numbers):
    numList = numbers.split(" ")
    numLen = len(numList)
    odd = [];
    even = [];
    for i in xrange(0, numLen):
        if (int(numList[i])%2 != 0):
            odd.append(i)
        else:
            even.append(i)
        if (len(odd) > 1 and len(even) != 0):
            return even[0] + 1
            break
        if (len(even) > 1 and len(odd) != 0):
            return odd[0] + 1
            break

def iq_test_1(numbers):
    numList = numbers.split(" ")
    numLen = len(numList)
    odd = [];
    even = [];
    for i in xrange(0, numLen):
        if (int(numList[i])%2 != 0):
            odd.append(i)
        else:
            even.append(i)
        if (len(odd) > 1 and len(even) != 0):
            return even[0] + 1
        if (len(even) > 1 and len(odd) != 0):
            return odd[0] + 1