const ENGINEER = 'engineer';

const MANAGER = 'manager';

const SALESMAN = 'salesman';

class Employee {
  constructor (name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType (type) {
    if (![
      ENGINEER,
      MANAGER,
      SALESMAN,
    ].includes(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  toString () {
    return `${this._name} (${this._type})`;
  }
}


module.exports = {
  Employee
};
