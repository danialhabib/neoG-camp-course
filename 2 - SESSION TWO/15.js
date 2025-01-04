// 3. Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
    { name: "ram", dept: "marketer" },
    { name: "Radha", dept: "SDE" },
    { name: "shyam", dept: "finance professional" },
]

const greetEmployeeMessages = employeeData.map(({name, dept}) => (`Hi ${name} we are glad to have you as a ${dept}`))

console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to hav