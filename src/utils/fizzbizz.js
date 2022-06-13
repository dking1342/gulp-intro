let fizzbizz = "";

for (let index = 1; index <= 50; index++) {
  if(index % 10 == 0 && index % 4 == 0){
    fizzbizz += "fizzbizz ";
  } else if(index % 10 == 0){
    fizzbizz += "bizz ";
  } else if(index % 5 == 0){
    fizzbizz += "fizz ";
  } else {
    fizzbizz += "* "
  }
}

console.log(fizzbizz)