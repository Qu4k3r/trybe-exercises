from random import choice, sample

def guess_the_word():
  words_list = ["pocahontas", "buraco", "pastel", "trabalhar"]

  print("Olá! Dada a seguinte lista, adivinhe a palavra embaralhada\n")

  for word in words_list:
    print(word.upper())

  word = choice(words_list).upper()

  scrambled_word = "".join(sample(word, len(word))).upper()

  print("")

  print(scrambled_word)

  user_guess = input("Que palavara é essa?\n").strip().upper()

  if (user_guess == word):
    print("Parabens, voce acertou!")
  else:
    print("Que pena, a palavra correta é \n", word)

guess_the_word()
