let triangle = 5
let joker = '*'
let blank = ''
let blankSpace = ' '
let columnController = triangle

for (let lineIndex = 0; lineIndex < triangle; lineIndex ++) {
  for (let columnIndex = 0; columnIndex <= triangle; columnIndex ++) {

/* here we have what we call "the cats jump (in portuguese)" cause we count where our columnIndex is and what we need to add in the respective line (and column): if is the joker or if is a blank space. You still don't get it? Try to "insert" columns in every line (but do it in your mind)! But how many columns, you ask.. and I say: numberOfColumns === triangle. Do you get it now? Good! Let's move on!*/  

    if (columnIndex < columnController) {
      blank += blankSpace
    }
    else {
      blank += joker
    }
  }
  console.log(blank)
  columnController -= 1
  blank = ''
}
