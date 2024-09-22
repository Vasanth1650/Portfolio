class InputController {
    caller(prev, current, minLimit, maxLimit) {
      return this.lengthController(prev, current, minLimit, maxLimit);
    }
  
    lengthController(prev, current, minLimit, maxLimit) {
      const proceed = this.limitChecker(current, minLimit, maxLimit);
      const sign = this.signFinder(prev, current);
      let result;
  
      if (proceed && sign === "increase") {
        console.log("dawdwa", proceed, current, minLimit, maxLimit);
        result = "increase";
      } else if (proceed && sign === "decrease") {
        result = "decrease";
      } else {
        result = "limitExceeds";
      }
  
      return result;
    }
  
    limitChecker(value, minLimit, maxLimit) {
      return value > minLimit && value < maxLimit;
    }
  
    signFinder(prev, current) {
      const limit1 = parseFloat(prev);
      const limit2 = parseFloat(current);
      return limit1 < limit2 ? "increase" : "decrease";
    }
  }
  
  export default new InputController();
  