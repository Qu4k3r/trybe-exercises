const clickCount = () => {
  let count = 0
  const myButton = document.querySelector('button')
  myButton.addEventListener('click', (event) => event.target.innerText = `I've been clicked ${count+=1} times!!`)
}

clickCount()
