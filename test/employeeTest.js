const employeeTest = require('ava');
const {Employee} = require("../src/employee");

employeeTest('employee case 1. cc is engineer. ', t => {
    const name = 'cc';
    const type = 'engineer';
    let employee = new Employee(name,type);
    const result = employee.toString();
    t.is(result, 'cc (engineer)');
});

employeeTest('employee case 2. cc is IT worker. ', t => {
    const name = 'cc';
    const type = 'IT worker';
    try {
        new Employee(name,type);
        t.fail();
    }
    catch (e) {
        t.is(e.message, 'Employee cannot be of type IT worker');
    }
});