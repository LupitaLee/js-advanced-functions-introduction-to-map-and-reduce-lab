// Your code here
function mapToNegativize(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      r.push(-1 * sourceArray[i])
    }
    return r
  }

  function mapToNoChange(sourceArray){
      let r = []
      for (const arr of sourceArray){
          r.push(arr)
          
      }
      return r
  }

  function mapToDouble(sourceArray){
      let r = []
      for (const arr of sourceArray){
         r.push(arr * 2)
      }
      return r
  }

  function mapToSquare(sourceArray){
      let r = []
      for (const arr of sourceArray){
          r.push(arr * arr)
      }
      return r
  }

  function reduceToTotal(sourceArray, startingPoint){

  }


function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }