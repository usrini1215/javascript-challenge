// from data.js
var tableData = data;


// only data from benton
filteredData = data.filter(val => val.city === 'benton')
console.log('sec')
console.log(filteredData)

filteredData2 = data.forEach(val => val.shape === 'triangle')
console.log('third')
console.log(filteredData2)

filteredData3 = data.map(val =>{
    if (val.shape === 'triangle'){
        return 'this is great'
    }
    else {
        return 
    }
})

console.log('four')
console.log(filteredData2)

//a) customers who spent more than $10
//b) list of children, i need to make a list of parents
//c) list of students whose bday in october
//d) list of currency:have list of US money,we want its canadian
// i dont need the US dollars after

//1           2            3
//foreach    map          filter
//                          a
//            b
//   d                       c


