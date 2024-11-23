//const input = "turpentine and turtles"; //UUEEIEEAUUEE
//const input = "Hi, Human"; //IUUA
//const input = "a whale of a deal!"; //AAEEOAEEA
const input = "O Hai, User Edgar!"; //OAIUUEEEEA

const vowels = ["a", "e", "i", "o", "u"];

var resultArray = [];

for(i in input) {
  //console.log(i);
  for(v of vowels) {
    //console.log(v);
    //process.stdout.write(v + " ");
    const vowel = input[i].toLowerCase();
    if (vowel === v) {
      //process.stdout.write(v);
      resultArray.push(vowel);
      if (vowel === "e" || vowel === "u") {
        //process.stdout.write(v);
        resultArray.push(vowel);
      break;
      }
    }
  }
  //console.log();
}
//console.log(resultArray);
console.log(resultArray.join("").toUpperCase());
