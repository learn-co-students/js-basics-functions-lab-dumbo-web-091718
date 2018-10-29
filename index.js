// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue >= 42) {
    return someValue - 42
  }else if (someValue < 42) {
    return 42 - someValue
  }
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;

}

function distanceTravelledInFeet(val1, val2) {
  let blocks;

  if (val1 > val2) {
    blocks = val1 - val2;
  }else if (val2 > val1) {
    blocks = val2 - val1;
  }

  return blocks * 264;
}

function calculatesFarePrice(strt, end) {
  const distance = distanceTravelledInFeet(strt, end);

  if (distance <= 400) {
    return 0;
  }else if (distance > 400 && distance < 2000) {
    return (distance - 400) * .02;
  }else if (distance > 2000 && distance < 2500) {
    return 25;
  }else{
    return 'cannot travel that far';
  }
}
