const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];



//sort to reorder elements
console.log(integers.sort((a, b) => {return a-b}))



//filter to remove elements
console.log(integers.filter(number => number < 20))



//map to make changes to elements
console.log(integers .map(number => number * 1.5 - 1))


//reduce to get total
console.log(integers.reduce((current, next) => current + next))

