// Code your solution in this file!

function distanceFromHqInBlocks(currentBlock) {
  return Math.abs(42 - currentBlock)
}


function distanceFromHqInFeet(currentBlock) {
  return distanceFromHqInBlocks(currentBlock) * 264
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    return Math.abs(startingBlock - endingBlock) * 264
}

function calculatesFarePrice(startingBlock, endingBlock) {
  let distance = distanceTravelledInFeet(startingBlock, endingBlock)
  if (distance < 2500){
    if (distance < 400){
      return 0
    } else if(distance > 2000){
      return 25
    } else if (distance > 400) {
      return (distance - 400) * .02
    }
  } else {
    return 'cannot travel that far'
  }
}
