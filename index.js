function roll() {
  var heading = document.firstElementChild.querySelector("h1");
  heading.textContent = "Refresh Me";

  var dice1 = Math.floor(Math.random() * 6);
  console.log(dice1);

  var dice2 = Math.floor(Math.random() * 6);
  console.log(dice2);

  var dice1Arr = document.querySelectorAll(".dice1");
  var dice2Arr = document.querySelectorAll(".dice2");

  var dice1Cur = document.querySelector(".visible1");
  var dice2Cur = document.querySelector(".visible2");

  dice1Cur.classList.toggle("visible1");
  dice1Arr[dice1].classList.toggle("visible1");

  dice2Cur.classList.toggle("visible2");
  dice2Arr[dice2].classList.toggle("visible2");

  if (dice1 > dice2) {
    heading.textContent = "Player 1 Wins!!";
  } else if (dice1 < dice2) {
    heading.textContent = "Player 2 Wins!!";
  } else {
    heading.textContent = "Draw!";
  }
}
