let myGrade = -1


if (myGrade < 0 || myGrade > 100) {
  console.log("ERROR! Grade point not in 0-100 range")
}

else if (myGrade >= 90) {
  console.log("A")
}

else if (myGrade >=80) {
  console.log("B")
}

else if (myGrade >=70) {
  console.log("C")
}

else if (myGrade >=60) {
  console.log("D")
  
}

else if (myGrade >=50) {
  console.log("E")
}

else {
  console.log("F")
}
