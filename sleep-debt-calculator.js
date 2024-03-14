const getSleepHours = (day) => {
  if (day === "Monday") {
    return 8;
  } else if (day === "Tuesday") {
    return 8;
  } else if (day === "Wednesday") {
    return 8;
  } else if (day === "Thursday") {
    return 8;
  } else if (day === "Friday") {
    return 7;
  } else if (day === "Saturday") {
    return 6;
  } else if (day === "Sunday") {
    return 7;
  }
};

//console.log(getSleepHours("Tuesday"));

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

//console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week

//console.log(getIdealSleepHours()); // if idealHours is 8, should print 56

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed.");
  } else {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  }
};

calculateSleepDebt();

