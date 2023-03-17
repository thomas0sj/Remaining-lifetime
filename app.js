let age = document.getElementById('age');
let endAge = document.getElementById('endAge');
let results = document.getElementById('textResults');
let btn = document.getElementById('btn');

function fct1(){
    let daysLived = ageValue*365;
    let weeksLived = (ageValue*365)/30;
    let hoursLived = ageValue*365*24;

    let daysOfLife = endAgeValue*365;
    let weeksOfLife = (endAgeValue*365)/30;
    let hoursOfLife = endAgeValue*365*24;

    let resultDays = (daysOfLife - daysLived);
    let resultWeeks = weeksOfLife - weeksLived;
    let resultHours = (hoursOfLife - hoursLived)/2;

    textResults.innerText = resultDays;
}

btn.addEventListener('click', fct1);

function getValue(){
    let ageValue = age.value;
    let endAgeValue = endAge.value;
}