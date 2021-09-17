import csv
from random import choice, sample

def guess_the_animal():
  with open("animals.csv") as animal_file:
    [animals] = csv.reader(animal_file)

    print("Olá! Dada a seguinte lista, adivinhe a palavra embaralhada\n")

    for animal in animals:
      print(animal.upper())

    random_animal = choice(animals).upper()

    scrambled_animal_word = "".join(sample(random_animal, len(random_animal))).upper()

    print("")

    print(scrambled_animal_word)

    user_guess = input("Que animal é esse?\n").strip().upper()

    if (user_guess == random_animal):
      print("Parabens, voce acertou!")
    else:
      print("Que pena, o animal correto é \n", random_animal)

guess_the_animal()
