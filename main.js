// list-like objects
//they are a sinlge object that contains multiple values stored in a list

let shopping = ['bread', 'milk', 'cheese', 'hummas'];
console.log(shopping);
//data can be stored at non-contiguois locations
let sparse = ['1', , '123'];

let random = [123, 'tree', [1, 2, 3], 123];
console.log(random);

//loop over an array
//Array.prototype.forEach()
//methof executes a provided function once for each array element
shopping.forEach(function(item, index, array) {
    console.log(item, index);
})

shopping.forEach(function(itme) {
    console.log('item:', item);
})
let actors = [{
    firstName: 'Kyle'
}];
actor.forEach(function(actor) {
    consol.log(actor.firstName);

})

// loop over array
for (i = 0; i < shopping.length; i++) {
    console.log('shopping item', shopping[i])
}

//for/of
for (item of shopping) {
    console.log('shopping item of:', item)
}

let multidemensional = [
    ['bread', 'milk'],
    ['couch', 'chair']
];

//Array.prototype.concat
let together = shopping.concat(random);
console.log('together', together);

//reorders array
console.log(shopping.reverse());
console.log(shopping);
console.log(shopping.sort());

// Arrow Functions
shopping.forEach(function(item, index, array) {
    console.log(item, index);
})

shopping.forEach(item => {
    console.log('arrow item:',
        item, ', index:', index)
})

//find an item in our array
//returns the value of the first element in the provided array
console.log('find:', shopping.find(item => item === 'bread'));