const buttonOne = document.querySelector('#button1');
const buttonTwo = document.querySelector('#button2');
const buttonThree = document.querySelector('#button3');
const buttonDiv = document.querySelector('.buttonDiv');

buttonOne.addEventListener('click', function(e) {
  buttonDiv.textContent = '버튼1 영역';
  buttonDiv.style.backgroundColor = "red";
})

buttonTwo.addEventListener('click', function(e) {
  buttonDiv.textContent = '버튼2 영역';
  buttonDiv.style.backgroundColor = "purple";
})

buttonThree.addEventListener('click', function(e) {
  buttonDiv.textContent = '버튼3 영역';
  buttonDiv.style.backgroundColor = "green";
})