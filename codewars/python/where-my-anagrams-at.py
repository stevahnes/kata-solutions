def anagrams_short(word, words):
    return [wrd for wrd in words if sorted(word)==sorted(wrd)]

def anagrams_long(word, words):
    charCount = {}
    res = []
    for char in word:
        if charCount.has_key(char):
            charCount[char] += 1
        else:
            charCount[char] = 1
    for wrd in words:
        lsCharCount = {}
        for ch in wrd:
            if lsCharCount.has_key(ch):
                lsCharCount[ch] += 1
            else:
                lsCharCount[ch] = 1
        if (charCount == lsCharCount):
            res.append(wrd)
    return res