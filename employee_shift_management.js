//Task 1 - Create an Employees Array of Employee Objects
let employees =[
{ name: 'John', shifts: [{ day: 'Monday', hours: 9 },{ day: 'Wednesday', hours: 6 }]},
{ name: 'Mary', shifts: [{ day: 'Tuesday', hours: 4 },{ day: 'Thursday', hours: 7 }]},
{ name: 'Bob', shifts: [{ day: 'Monday', hours: 9 }]},
{ name: 'Doug', shifts: [{ day: 'Friday', hours: 9 }]}];

//Task 2 - Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee){
    console.log(`Employee: ${employee.name}`)
    employee.shifts.forEach(shift=>{
        console.log(`Day: ${shift.day}, Hours Worked: ${shift.hours}`)})
        console.log(`--------------------------`)};

//Task 3 - Create a Function to Assign a New Shift
function assignShift(employeeName, shiftDay, shiftHours) {
    let assignedEmployee = employees.find(emp => emp.name === employeeName);
    if (!assignedEmployee) {
        console.log(`Employee ${employeeName} not found.`);
        return}
    let existingShift = assignedEmployee.shifts.find(shift => shift.day === shiftDay);
    if (existingShift) {
        console.log(`${assignedEmployee.name} already has a shift assigned for ${shiftDay}!`)}
     else {
        assignedEmployee.shifts.push({ day: shiftDay, hours: shiftHours });
        console.log(`${shiftHours} hours shift on ${shiftDay} was assigned to ${employeeName}!`)}};