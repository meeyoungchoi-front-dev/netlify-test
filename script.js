const buttonOne = document.querySelector('#button1');
const buttonTwo = document.querySelector('#button2');
const buttonThree = document.querySelector('#button3');
const buttonDiv = document.querySelector('.buttonDiv');

buttonOne.addEventListener('click', function(e) {
  alert('회원가입 버튼 클릭');
  buttonDiv.textContent = '회원가입 영역';
  buttonDiv.style.backgroundColor = "red";
})

buttonTwo.addEventListener('click', function(e) {
  alert('로그인 버튼 클릭');
  buttonDiv.textContent = '로그인 영역';
  buttonDiv.style.backgroundColor = "purple";
})

buttonThree.addEventListener('click', function(e) {
  alert('비밀번호 찾기 버튼 클릭');
  buttonDiv.textContent = '비밀번호 찾기 영역';
  buttonDiv.style.backgroundColor = "green";
})