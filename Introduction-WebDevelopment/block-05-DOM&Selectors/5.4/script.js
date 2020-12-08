// Step 1
function changeBackgroundColor() {
  document.body.style.background = localStorage.getItem('backgroundColor')
  const myButton = document.querySelector('#btn-bckg-color')
  const inputBckgColor = document.querySelector('input')
  myButton.addEventListener('click', () => {
    document.body.style.background = inputBckgColor.value
    localStorage.setItem('backgroundColor', document.body.style.background)
  })
}
changeBackgroundColor()

// Step 2
function changeTextColor() {
  document.body.style.color = localStorage.getItem('textColor')
  const myButton = document.querySelector('#btn-text-color')
  const inputTextColor = document.querySelector('#text-color')
  myButton.addEventListener('click', () => {
    document.body.style.color = inputTextColor.value
    localStorage.setItem('textColor', document.body.style.color)
  })
}

changeTextColor()
