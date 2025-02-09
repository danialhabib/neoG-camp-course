// 11. Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.


const students = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "A", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "B", scholarship: true },
];

const findStudent = students => students.find(str => str.grade == "B" && str.scholarship)

const student = findStudent(students);
console.log(student);
// Output: { name: "Sarah", grade: "B", scholarship: true }