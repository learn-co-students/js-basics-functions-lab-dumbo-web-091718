function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
   return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
 let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    }
    else if (distance > 400 && distance < 2000) {
      return 2.56;
    }
    else if (distance > 2000 && distance < 2500) {
      return 25;
      // return 0.02 * distance
    }
    else {
      return 'cannot travel that far';
    }
  }






// Code your solution in this file!
