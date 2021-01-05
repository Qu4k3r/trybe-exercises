// Step 1
window.onload = function () {
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

  // Step 3
  function modifyTextSize() {
    let fontSize;
    if (localStorage['fontSize']) {
      fontSize = Number(localStorage['fontSize'])
    } else {
      localStorage.setItem('fontSize', 16)
      fontSize = Number(localStorage['fontSize'])
    }
    document.body.style.fontSize = fontSize + 'px'

    const incr = 1
    const myIncrButton = document.querySelector('#btn-incr-text-size')
    const myDecrButton = document.querySelector('#btn-decr-text-size')
    myIncrButton.addEventListener('click', () => {
      fontSize += incr
      document.body.style.fontSize = fontSize + 'px'
      localStorage['fontSize'] = fontSize
    })
    myDecrButton.addEventListener('click', () => {
      fontSize -= incr
      document.body.style.fontSize = fontSize + 'px'
      localStorage['fontSize'] = fontSize
    })
  }
  modifyTextSize()
}

// Step 4 - line height
function modifyLineHeight() {
  let lineHeight
  if (localStorage['lineHeight']) {
    lineHeight = Number(localStorage['lineHeight'])
  }
  else {
    localStorage.setItem('lineHeight', 1.3)
    lineHeight = Number(localStorage['lineHeight'])
  }
  document.body.style.lineHeight = lineHeight

  const myIncrButton = document.querySelector('#btn-incr-line-height')
  const myDecrButton = document.querySelector('#btn-decr-line-height')
  myIncrButton.addEventListener('click', () => {
    lineHeight += 0.1
    document.body.style.lineHeight = lineHeight
    localStorage['lineHeight'] = Number(lineHeight).toFixed(2)
  })
  myDecrButton.addEventListener('click', () => {
    lineHeight -= 0.1
    document.body.style.lineHeight = lineHeight
    localStorage['lineHeight'] = Number(lineHeight).toFixed(2)
  })
}

modifyLineHeight()

// Step 5 - font family
function modifyFontFamily() {
  document.body.style.fontFamily = localStorage['fontFamily'] 
  const select = document.querySelector('select')
  select.addEventListener('click', (event) => {
    document.body.style.fontFamily = event.target.value
    localStorage['fontFamily'] = document.body.style.fontFamily
  })
}

modifyFontFamily()
