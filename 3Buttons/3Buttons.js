 let randomValue = Math.floor((Math.random() * 3) + 1);
 function findTheLuckyButton(id) {
  if (id == randomValue) {
    alert("You won!");
  } else {
    alert("You lost!")
  }
 }