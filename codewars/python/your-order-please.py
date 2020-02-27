def order(sentence):
  if (sentence == ""):
      return sentence
  else:
      words = sentence.split(" ")
      order = range(len(words))
      for word in words:
          for character in word:
              if (character.isdigit()):
                  order[int(character) - 1] = word
      return (" ").join(order)