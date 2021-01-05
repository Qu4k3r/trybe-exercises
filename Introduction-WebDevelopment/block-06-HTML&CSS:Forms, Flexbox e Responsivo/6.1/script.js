// Step 2 & 3 - verify data format and throw error message
function verifyDay() {
  const day = Number(document.querySelector('#dia').value)
  if (day >=1 && day <= 31) {
    return true
  }
  alert('Dia invalido')
  return false
}

function verifyMonth() {
  const month = Number(document.querySelector('#mes').value)
  if (month >= 1 && month <= 12) {
    return true
  }
  alert('Mes invalido')
  return false
}
function verifyYear() {
  const year = Number(document.querySelector('#ano').value)
  if (year > 0) {
    return true
  }
  alert('Ano invalido')
  return false
}

function submitValues() {
  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    if (verifyDay() && verifyMonth() && verifyYear()) {
      if (document.querySelector('.result-div'))
      deleteResultDiv()
      showAllContent()
    }
  })
}

submitValues()

// Step 3 & 4 - create a div that shows all the keys and values of data submitted
function showAllContent() {
  const arrayOfResults = document.querySelectorAll('input')
  for (let key of arrayOfResults) {
    const resultDiv = document.createElement('div')
    resultDiv.className = 'result-div'
    resultDiv.innerText = `${key.value}`
    document.body.appendChild(resultDiv)
  }
}

function deleteResultDiv() {
  const myArrayDiv = document.querySelectorAll('.result-div')
  for (let div of myArrayDiv) {
    div.remove()
  }
}

// The exercise is not complete
// I'll try to finish it later because right now ... I can't
