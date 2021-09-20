// Your code here
// map like functions 
function mapToNegativize(sourceArray){
    let oldArr = [...sourceArray]
    let newArr = []
  
    for (const element of oldArr){
   
        let num = element * -1
        newArr.push(num)
    }
    return newArr
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    let oldArr = [...sourceArray]
    let newArr = []
  
    for (const element of oldArr){
   
        let num = element * 2
        newArr.push(num)
    }
    return newArr
}

function mapToSquare(sourceArray){
    let oldArr = [...sourceArray]
    let newArr = []
  
    for (const element of oldArr){
   
        let num = element ** 2
        newArr.push(num)
    }
    return newArr
    
}

// reduce like functions 

function reduceToTotal(sourceArray, startingPoint = 0) {
    
    let total = startingPoint
    for (const element of sourceArray){
         total += element
      }
   return total
}

function reduceToAllTrue(sourceArray) {
    
}

function reduceToAnyTrue(sourceArray){
    
}