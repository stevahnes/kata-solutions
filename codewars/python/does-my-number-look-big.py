import math

def narcissistic( value ):
    valueLen = len(str(value))
    valueCopy = value
    valueSum = 0
    while (valueCopy != 0):
        valueSum += (valueCopy%10)**valueLen
        valueCopy = math.floor(valueCopy/10)
    if (valueSum == value):
        return True
    else:
        return False