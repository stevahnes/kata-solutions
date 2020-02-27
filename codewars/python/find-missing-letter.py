def find_missing_letter(chars):
    l = len(chars) - 1
    for i in xrange(0, l):
        if chr(ord(chars[i]) + 1) != chars[i+1]:
            return chr(ord(chars[i]) + 1)
            break