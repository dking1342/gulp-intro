let word = "race car";
let reversedWord = "";
let index = word.length - 1;

while (word.length > 0) {
  reversedWord += word[word.length - 1]
  word = word.slice(0,-1);  
}

console.log("reversedWord", reversedWord)