// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const pickup = 42;
  if (someValue > pickup) {
    return someValue - pickup
  } else {
    return pickup - someValue
  }
}

function distanceFromHqInFeet(someValue) {
  const pickup = 42;
  const distanceInFeet = 264;
  if (someValue > pickup) {
    return (someValue - pickup) * distanceInFeet
  } else {
    return (pickup - someValue) * distanceInFeet
  }
}

function distanceTravelledInFeet(start, destination) {
  const distanceInFeet = 264;
  if (start > destination) {
    return (start - destination) * distanceInFeet;
  } else {
    return (destination - start) * distanceInFeet;
  }
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0
  } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
