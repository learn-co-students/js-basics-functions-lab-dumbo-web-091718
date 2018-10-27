// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let distance;

  if (block > 42){
    distance = block - 42
  }
  else {
    distance = 42 - block
  }
  return distance
}

function distanceFromHqInFeet(block) {
  let distance;

  if (block > 42){
    distance = (block - 42)*264
  }
  else {
    distance = (42 - block)*264
  }
  return distance
}

function distanceTravelledInFeet(start, end) {
  let distance;

  if (start > end){
    distance = (start - end)*264
  }
  else {
    distance = (end - start)*264
  }
  return distance
}

function calculatesFarePrice(start, destination) {
  let price;
  let distance;

  if (start > destination){
    distance = (start - destination)*264
  }
  else {
    distance = (destination - start)*264
  }

  if (distance < 400) {
    price = 0
  } else if (distance > 400 && distance < 2000) {
    difference = distance - 400
    price = 0.02 * difference
  } else if (distance > 2000 && distance < 2500) {
    price = 25
  } else {
    price = "cannot travel that far"
  }
  return price
}
