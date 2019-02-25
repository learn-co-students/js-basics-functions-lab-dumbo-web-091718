// Code your solution in this file!

const hqBlock = 42

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hqBlock)
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, destination){
  let distance =  distanceTravelledInFeet(start, destination)
  if (distance <= 2000){
    distance -= 400
    return distance <= 0 ? 0 : distance * .02
  } else if (distance > 2000 && distance < 2500){
    return 25
  } else {
    return "cannot travel that far"
  }
}