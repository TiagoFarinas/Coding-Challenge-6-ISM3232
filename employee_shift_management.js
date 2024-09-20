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

//Task 4 - Create a Function to Calculate Total Hours Worked
function calculateTotalHours (employeeName){
    let assignedEmployee = employees.find(emp => emp.name === employeeName);
    if (!assignedEmployee) {
        console.log(`Employee ${employeeName} not found.`);
        return 0;}
   let totalHours=  assignedEmployee.shifts.reduce((total, shift) => total+shift.hours,0)
    return totalHours}//Calculate the total hour wored for one employee

//Task 5 - Create a Function to List Employees with Free Days
function listAvailableEmployees(day) {
    console.log(`Available employees on ${day}:`);
    const availableEmployees = employees.filter(emp => {
        return emp.shifts.every(shift => shift.day !== day)});
    if (availableEmployees.length > 0) {
        availableEmployees.forEach(emp => console.log(emp.name))}
         else {console.log(`No employees are available on ${day}.`)}};
