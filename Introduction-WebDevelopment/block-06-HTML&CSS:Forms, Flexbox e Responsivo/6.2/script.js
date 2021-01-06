function stateSelection() {
  document.addEventListener('DOMContentLoaded', function() {
    const options = {
      "Acre": "AC",
      "Alagoas": "AL",
      "Amapá": "AP",
      "Amazonas": "AM",
      "Bahia": "BA",
      "Ceará": "CE",
      "Distrito Federal": "DF",
      "Espírito Santo": "ES",
      "Goiás": "GO",
      "Maranhão": "MA",
      "Mato Grosso": "MT",
      "Mato Grosso do Sul": "MS",
      "Minas Gerais": "MG",
      "Pará": "PA",
      "Paraíba": "PB",
      "Paraná": "PR",
      "Pernambuco": "PE",
      "Piauí": "PI",
      "Rio de Janeiro": "RJ",
      "Rio Grande do Norte": "RN",
      "Rio Grande do Sul": "RS",
      "Rondônia": "RO",
      "Roraima": "RR",
      "Santa Catarina": "SC",
      "São Paulo": "SP",
      "Sergipe": "SE",
      "Tocantins": "TO"
    }
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });
}

stateSelection()

function dateSelection() {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, String());
  });
}

dateSelection()
  
function submitValues() {
  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    if (document.querySelector('.result-div')) {
      deleteResultDiv()
    }
    showAllContent()
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
