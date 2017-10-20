function produceDrivingRange(range) {
  return function(startBlock, endBlock) {
    let distancetravelled = parseInt(endBlock ) - parseInt(startBlock)
    if (distancetravelled > range) {
      return `${distancetravelled - range} blocks out of range`
    }else 
      {return `within range by ${range - distancetravelled}`
    }
  }
}

function produceTipCalculator(tipCalculator) {
  return function(fare) {
    return fare / (tipCalculator * 100) 
  }
}

function createDriver() {
  let DriverId = 0

  return class {
    constructor (name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}