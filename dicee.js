
if(sessionStorage.getItem("flag") !== null) {
  var nums = updateDices();
  updateHeader(nums);
}
else {
  sessionStorage.setItem("flag", true);
}

function updateHeader(numbers) {
  if(numbers[0] > numbers[1]) {
    document.querySelector("h1").innerText="🚩 Player 1 Wins";
  }
  else if (numbers[1] > numbers[0]) {
    document.querySelector("h1").innerText="Player 2 Wins 🚩";
  }
  else {
    document.querySelector("h1").innerText="Draw!";
  }
}

function updateDices() {
  var num1 = randomDice();
  var num2 = randomDice();
  document.querySelector(".img1").setAttribute("src", "images/dice"+num1+".png");
  document.querySelector(".img2").setAttribute("src", "images/dice"+num2+".png");
  return [num1, num2];
}

function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}
