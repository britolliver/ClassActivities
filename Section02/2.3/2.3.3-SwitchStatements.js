// Correct these statements so they make sense
// Sunday = 0, Monday = 1, T=2,W=3Th=4,F=5... Saturday = 6
// re-assign day to any number from 0 - 6 to test the result
let day = 1;
let dayName = `Today`;

// Complete this switch case statement to produce the correct results please.

switch (day) {
  case 1:
    dayName = `Today is Monday`;
    break;

  case 2:
    console.log(`Today is Tuesday`);
    break;

  case 3:
    dayName = `Today is Wednesday`;
    break;

  // Note the code blocks in the next 2 cases: Why?
  case 4: {
    const message = `Today is Thursday`;
    console.log(message);
    break;
  }

  case 5: {
    const message = `Tomorrow it's the weekend!`;
    console.log(message);
    break;
  }
  // write a case here for the weekend (how many days in the weekend?)
  case 6:
  case 0:
    console.log(`It's the Weekend !!`);
    break;

  default:
    console.log(`It is not any day I guess`);
}
if (dayName !== "Today") {
  console.log(dayName);
}
