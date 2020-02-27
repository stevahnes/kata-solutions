import math

def dig_pow(n, p):
    nDup = n
    pRev = len(str(n)) + p - 1
    powSum = 0
    while (nDup != 0):
        powSum += (nDup%10)**pRev
        pRev -= 1
        nDup = math.floor(nDup/10)
    if (powSum%n != 0):
        return -1
    else:
        return powSum/n