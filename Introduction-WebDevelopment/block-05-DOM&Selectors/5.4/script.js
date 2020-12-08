// Step 1
function changeBackgroundColor() {
  const myButton = document.querySelector('#btn-bckg-color')
  const inputBckgColor = document.querySelector('input')
  myButton.addEventListener('click', () => {
    document.body.style.background = inputBckgColor.value
  })
}

changeBackgroundColor()

// Step 2
function changeTextColor() {
  const myButton = document.querySelector('#btn-text-color')
  const inputTextColor = document.querySelector('#text-color')
  myButton.addEventListener('click', () => {
    document.body.style.color = inputTextColor.value
  })
}

changeTextColor()
