// 12. Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

const employees = [
    { name: 'Abhay', age: 25, salary: 20000 },
    { name: 'Joice', age: 30, salary: 35000 },
    { name: 'Reena', age: 35, salary: 15000 },
    { name: 'Jeena', age: 40, salary: 50000 },
]

const filterBySalary = (employees, salary, age) => employees.filter(employee => employee.salary > salary && employee.age > age)

const filteredEmployees = filterBySalary(employees, 22000, 25)

console.log(filteredEmployees)
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 500