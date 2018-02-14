// PROBLEM 5
const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

let average = array => {
  var total = 0
  array.forEach(e => {
    total += e
  })
  return total / array.length
}

// PROBLEM 6

let array1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
let array2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];

let overlap = (array1, array2) => {
  let answer = []
  for (var i = 0; i < array1.length; i++) {
    array1[i] === array2[i] ? answer.push(array1[i]) : null
  }
  return answer
}
