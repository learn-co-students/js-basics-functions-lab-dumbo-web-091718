// Code your solution in this file!

function distanceFromHqInBlocks (distance){
  let result;
  result = Math.abs(distance - 42)

  return result;
}

function distanceFromHqInFeet(distance) {
  distanceFromHqInBlocks(distance)

  let result2;
  result2 = Math.abs(distance - 42) * 264;

  return result2;
}

function distanceTravelledInFeet(distance, distance1) {
  let extra = distanceFromHqInFeet(distance, distance1)

  let result3;
  result3 = Math.abs(distance-distance1)*264;


  return result3;

}

function calculatesFarePrice(start, destination) {
  let result4;
  let diff = distanceTravelledInFeet(start, destination);
  console.log("start:", start);
  console.log("destination:", destination);
  console.log("difference:", diff);
  if (diff <= 400) {
    result4 = 0;
  } else if (diff > 400 && diff <= 2000) {
    result4 = (diff - 400) * 0.02;
  } else if (diff > 2000 && diff <= 2500) {
    result4 = 25;
  } else if (diff > 2500) {
    result4 = 'cannot travel that far'
  }
  return result4;
}
