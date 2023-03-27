function numSum(argOne){
    return function (argTwo){
      const sum = argOne+argTwo
      return sum
      }
    }
  
  console.log(numSum(2))