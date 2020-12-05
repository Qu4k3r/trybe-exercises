function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercise1
function setClasses(day, dayNumber) {
  if(specialDays[day]) {
    return dayNumber.className = specialDays[day]
  }
  return dayNumber.className = 'day'
}

const specialDays = {
  4: 'day friday',
  11: 'day friday',
  18: 'day friday',
  24: 'day holiday',
  25: 'day friday holiday',
  31: 'day holiday'
}

function createDaysOfTheCalendar() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  const daysList = document.querySelector('#days')

  for (let day of dezDaysList) {
    const dayNumber = document.createElement('li')
    setClasses(day, dayNumber)
    dayNumber.innerHTML = day
    daysList.appendChild(dayNumber)
  }
}

createDaysOfTheCalendar()

// Exercise 2
let holidayButton = document.createElement('button')
function createHolidayButton(feriados) {
  holidayButton.id = 'btn-holiday'
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0]
  holidayButton.innerText = feriados
  buttonsContainer.appendChild(holidayButton)

}

createHolidayButton('Feriados')

// Exercise 3
function setColor(day) {
  if (day.style.background === 'red') {
    return day.style.background = 'rgb(238, 238, 238)'
  }
  return day.style.background = 'red'
}
function showHolidays() {
  holidayButton.addEventListener('click', () => {
  let holidayDays = document.querySelectorAll('.holiday')
  for (let day of holidayDays) {
    setColor(day)
  }
})
}

showHolidays()
