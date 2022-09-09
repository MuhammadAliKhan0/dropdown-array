// let a = [
//     {
//         id:1,
//         name: 'Abc',
//         category: 'A'
//     },
//     {
//         id:2,
//         name: 'Abc',
//         category: 'B'
//     },
//     {
//         id:3,
//         name: 'Abc',
//         category: "A"
//     },
//     {
//         id:4,
//         name: 'Abc',
//         category: 'A'
//     },
// ]
// const a_names = [];
// a.forEach(function (a) {
//     a_names.push(a.name);    
// });
 
// console.log(a_names)
// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// var petCounts = pets.reduce(function(obj, pet){
//     if (!obj[pet]) {
//         obj[pet] = 1;
//     } else {
//         obj[pet]++;
//     }
//     return obj;
// }, {});

// console.log(petCounts); 
const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const result = words.filter(word => word.length < 8);
console.log(result);




