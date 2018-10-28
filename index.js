function distanceFromHqInBlocks(location) {
    if (location > 42) {
      return location - 42;
    } else {
      return 42 - location;
    }
  }

  function distanceFromHqInFeet(location) {
    if (location > 42) {
      let numBlocks = location - 42;
      return numBlocks * 264;
    } else {
      numBlocks = 42 - location;
      return numBlocks * 264;
    }
  }
   function distanceTravelledInFeet(firstLocation, secondLocation) {
    if (firstLocation < secondLocation) {
      let numBlocks = secondLocation - firstLocation;
      return numBlocks * 264;
    } else {
      let numBlocks = firstLocation - secondLocation;
      return numBlocks * 264;
    }
  }
   function calculatesFarePrice(start, destination) {
     if (destination - start === 1 || start - destination === 1) {
      return 0;
     } else if (start > destination && start - destination < 8) {
      let numBlocks = start - destination;
      let numFeet = numBlocks * 264;
      let totalFeet = numFeet - 400;
      let totalFare = totalFeet * 0.02;
       return totalFare;
     } else if (destination > start && destination - start < 8) {
      let numBlocks = destination - start;
      let numFeet = numBlocks * 264;
      let totalFeet = numFeet - 400;
      let totalFare = totalFeet * 0.02;
       return totalFare;
     } else if (start - destination >= 8 && start - destination < 10) {
      return 25;
     } else if (destination - start >= 8 && destination - start < 10) {
      return 25;
     } else {
      return "cannot travel that far";
    }
  }