// Code your solution in this file!
//Lets figure:  Manhattan is 264 feet long  && charge 2 cents 400ft >.
const distanceFromHqInBlocks = function(distance){
  return Math.abs(distance - 42);
}
//
const distanceFromHqInFeet = function(distance) {
  return distanceFromHqInBlocks(distance) * 264;
};

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;

};

function calculatesFarePrice(start, destination){
  // The first four hundred feet are free.
  let distanceInFt = distanceTravelledInFeet(start, destination)
  let chargeDistance = distanceInFt - 400
  if (distanceInFt < 400) {
    return 0;
  }
  else if (distanceInFt > 400 && distanceInFt <= 2000 ) {
    return chargeDistance * 0.02
  }
  else if (distanceInFt <= 2500 ) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
