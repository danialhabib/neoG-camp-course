// 7. Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.


// Your ES6 code here
const userData = { firstName: 'John', lastName: 'Dee' }

const podAndTeamAllocation = (obj) => ({...obj, TeamId: '667439'})

// userData.TeamId = '667543'
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}