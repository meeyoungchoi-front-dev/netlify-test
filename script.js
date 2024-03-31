const homeButton = document.getElementById('home');
const gameButton = document.getElementById('game');
const musicButton = document.getElementById('music');

homeButton.addEventListener("click", function() {
    alert("메인 버튼 클릭");
});

gameButton.addEventListener('click', function(event) {
    alert("게임 버튼 클릭");
});

musicButton.addEventListener('click', function(event) {
    alert("쥬크박스 버튼 클릭");
});