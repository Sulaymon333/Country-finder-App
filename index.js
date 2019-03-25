// DOM elements
const input = document.querySelector('#input');
const actions = document.querySelector('.actions');
const startsWithButton = document.querySelector('#starts');
const containsButton = document.querySelector('#contains');
const sort = document.querySelector('#sort');
const countriesTotal = document.querySelector('.total-countries');
let countriesContainer = document.querySelector('.countries-container');

// build country DIV's
function countryDivs(forEachItem) {
  const countryDiv = document.createElement('div');
  countryDiv.classList.add('country');
  countryDiv.innerHTML += forEachItem;
  countryDiv.style.color = 'black';
  countryDiv.style
    .fontWeight = '500'
  countryDiv.style.backgroundColor = `rgba(255, 255, 255, 0.8)`;
  countriesContainer.appendChild(countryDiv);
}

// Button Switcher function
startsWithButton.classList.add('selected-button');

function buttonSwitcher(button1, button2) {
  button2.addEventListener('click', function () {
    button2.classList.add('selected-button');
    button1.classList.remove('selected-button');
  });
}
buttonSwitcher(startsWithButton, containsButton) // starts with
buttonSwitcher(containsButton, startsWithButton) // contains

// capitalize input
function capitalize(value) {
  let firstItem = value.slice(0, 1).toUpperCase();
  return (value = firstItem + value.slice(1));
}

// Get the total number of countries and style it - default
countriesTotal.innerHTML = countryList.length;
countriesTotal.style.fontWeight = '700';

// Show all the countries - default view
countryList.forEach(country => {
  countryDivs(country);
});

// initialize sort type arrays
let startsWith;
let contains;

input.addEventListener('keyup', function (e) {
  contains = countryList.filter(country => {
    return country.toLowerCase().includes((e.target.value.toLowerCase()));
  });
  sortType(contains)
  containsButton.addEventListener('click', containsChecker);

  startsWith = countryList.filter(country => {
    countriesContainer.innerHTML = '';
    return country.startsWith(capitalize(e.target.value));
  });
  sortType(startsWith)
  startsWithButton.addEventListener('click', startsWithChecker);
});

// starts with function
function startsWithChecker() {
  countriesContainer.innerHTML = '';
  sortType(startsWith);
}

// contains function
function containsChecker() {
  countriesContainer.innerHTML = '';
  sortType(contains)
}

// get sorted data without clicking buttons
function sortType(sortType) {
  sortType.forEach(countrySorted => {
    countryDivs(countrySorted)
  });
  countriesTotal.innerHTML = sortType.length;
}