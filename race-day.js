let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = Math.random() > 0.5 ? false : true;
console.log(`Registered early: ${registeredEarly}.`);
const age = Math.floor(Math.random() * 75) + 10;
console.log(`Age: ${age}.`);
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}
console.log(`Race number: ${raceNumber}.`);
if (age > 18 && registeredEarly) {
  console.log("Race will start at 9:30 am.");
} else if (age > 18 && !registeredEarly) {
  console.log("Race will start at 11:30 am.");
} else if (age < 18) {
  console.log("Race will start at 12:30 am.");
} else {
  console.log("Please see the registration desk.");
}

