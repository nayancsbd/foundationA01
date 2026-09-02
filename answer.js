// Question No: 01
const describeValue = (value) => {
  const typeOfValue = typeof value;
  const truthiness = value ? "truthy" : "falsy";
  return `${typeOfValue} | ${truthiness}`;
};


// Question No: 02
const getDayType = (day) => {
  const lowerDays = day.toLowerCase();

  switch (lowerDays) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
};


// Question No: 03
const validateUsername = (username) => {
  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
};


// Question No: 04
const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
  let totalFare = 50;

  if (distance > 2) {
    const extraDistance = distance - 2;
    totalFare = totalFare + (extraDistance * 15);
  }

  totalFare = totalFare + (waitingMinutes * 2);

  if (isNight) {
    totalFare = totalFare * 1.2;
  }

  return totalFare;
};


//Question No: 05
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }
  const requiredRate = (runsNeeded / ballsLeft) * 6;
  
  let verdict;

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return  `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;

  };
