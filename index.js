// Code your solution in this file!
function distanceFromHqInBlocks(x) {
  return  (x > 42 ?  x-42 : 42 - x);
}


function distanceFromHqInFeet(x) {
  return distanceFromHqInBlocks(x)*264;
}

function distanceTravelledInFeet(x, y) {
  return (x > y ? (x-y)*264 : (y-x)*264);
}

function calculatesFarePrice(start, destination) {
    let  feet = distanceTravelledInFeet(start, destination);

    if (feet <= 400) {
      return 0;
    } else if ( feet > 2500 ) {
      return 'cannot travel that far';
    } else if (feet <= 2000) {
      return (feet - 400)*.02;
    } else {
      return 25;
    }
}
