let a = "bishop"
let b = "rook"

switch (b.toLowerCase()) {
  case a:
    console.log("bishop -> diagonals")
    break
  case b:
    console.log("rook -> horizontals and verticals")
    break
}
