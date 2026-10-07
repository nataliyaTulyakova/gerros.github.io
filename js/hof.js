//-- Task 1 --
function calculate1(numbers) {
 let sum = 0;
 for (const number of numbers) {
   sum = sum + number;
 }
 return sum;
}
console.log(calculate1([1, 2, 4])); // => 7

// sum() - це функція додавання. 
function sum(n1, n2) {
   return n1 + n2;
}

// multiply() - це функція множення.

function multiply(n1, n2) {
   return n1 * n2;
}

function calculate(operation, initialValue, numbers){
    let result = initialValue;
    for (const number of numbers){
        result = operation(result, number); 
    };
    return result;
} 
console.log(`Sum of elements: ${calculate(sum, 0, [1, 2, 4])}`);
console.log(`Product of elements: ${calculate(multiply, 1, [1, 2, 4])}`);

// -- Task 2
let student_names = ["Wick", "Malcolm", "Smith"];

let students_info = student_names.map((elem, index, array) => {
    return `name: ${elem} | index: ${index} | array: ${array} `;    
});

students_info.forEach( elem => {
    console.log (elem);
});

// -- Task 3

let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];
const maxDegree = 600;

let students_info_percentage = students_information.map(st => {
    const {...st_clone} = {...st, percentage: st.degree/maxDegree*100};
    return st_clone;
});

//console.table(students_info_percentage);
students_info_percentage.forEach(st => {
    console.log (JSON.stringify(st));
});



