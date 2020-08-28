const employeeTest = require('ava');
const {Employee} = require("../src/employee");

employeeTest('employee case 1. cc is engineer. ', t => {
    const name = 'cc';
    const type = 'engineer';
    let employee = new Employee(name,type);
    const result = employee.toString();
    t.is(result, 'cc (engineer)');
});

