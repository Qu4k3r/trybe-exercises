// Step 1
function changeBackgroundColor() {
  const myButton = document.querySelector('#btn-bckg-color')
  const inputColor = document.querySelector('input')
  myButton.addEventListener('click', () => {
    document.body.style.background = inputColor.value
  })
}

changeBackgroundColor()
