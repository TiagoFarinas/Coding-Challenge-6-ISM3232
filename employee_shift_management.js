//Task 1 - Create an Employees Array of Employee Objects
const employees = [
{ name: 'John', shifts: [{ day: 'Monday', hours: 9 },{ day: 'Wednesday', hours: 6 }]},
{ name: 'Mary', shifts: [{ day: 'Tuesday', hours: 4 },{ day: 'Thursday', hours: 7 }]},
{ name: 'Bob', shifts: [{ day: 'Monday', hours: 9 }]},
{ name: 'Doug', shifts: [{ day: 'Friday', hours: 9 }]}];

//Task 2 - Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee){
    console.log(`Employee: ${employee.name}`)
    employee.shifts.forEach(shift=>{
        console.log(`Day: ${shift.day}, Hours Worked: ${shift.hours}`)})
        console.log(`--------------------------`)}