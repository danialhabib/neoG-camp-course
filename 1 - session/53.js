// 8. Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

const checkForTeam = (student) => {
    if(!student.team) {
        student.team = 'A';
    }
    return student;
}


console.log(checkForTeam({ firstName: 'Penn', lastName: 'Ma' }))
// {firstName: 'Penn', lastName: 'Ma', team: A}
console.log(checkForTeam({ firstName: 'John', lastName: 'Dee', team: 'B' }))
// {firstName: 'John', lastName: 'Dee', team: B}
console.log(checkForTeam({ firstName: 'Priya', lastName: 'Raj' }))
// {firstName: 'Priya', lastName: 'Raj', team: A}
