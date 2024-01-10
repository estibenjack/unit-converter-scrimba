/*
1 meter = 3.2808 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

const convertBtn = document.getElementById("convert-btn")

const inputEl = document.getElementById("input-el")
const lengthText = document.getElementById("length-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")

convertBtn.addEventListener("click", function(){
  if(inputEl.value !=""){
    lengthText.innerHTML = 
  `
    ${inputEl.value} metres = ${(inputEl.value*3.2808).toFixed(3)} feet |  ${inputEl.value} feet = ${(inputEl.value/3.2808).toFixed(3)} metres
  `
  volumeText.innerHTML = 
    `${inputEl.value} litres = ${(inputEl.value*0.264172).toFixed(3)} gallons |  ${inputEl.value} gallons = ${(inputEl.value/0.264172).toFixed(3)} litres
    `
    massText.innerHTML = 
  `
    ${inputEl.value} kilograms = ${(inputEl.value*2.20462).toFixed(3)} pounds |  ${inputEl.value} pounds = ${(inputEl.value/2.20462).toFixed(3)} kilograms
  `
  } else {
        alert('Please input a number to calculate!');
    }
})