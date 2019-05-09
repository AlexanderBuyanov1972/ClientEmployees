(
    function (window) {
        let App = window.App || {};

        function Employees() {
            this.salary = 0;
            this.employees = {};
        }

        Employees.prototype.add = function (id, employee) {
            if (this.employees[id]) {
                return false;
            }
            this.employees[id] = employee;
            this.salary += employee.salary;
            return true;
        }

        Employees.prototype.get = function (id) {
            let result = this.employees[id];
            if (result)
                return result;
            return {};
        }
        Employees.prototype.remove = function (id) {
            let result = this.employees[id];
            if (result) {
                delete this.employees[id];
                return true;
            }
            return false;
        }

        Employees.prototype.getAll = function () {
            return Object.values(this.employees);
        }

        Employees.prototype.removeAll = function () {
            this.employees = {};
        }

        Employees.prototype.getSalary = function(){
            return this.salary;
        }

        App.Employees = Employees;
        window.App = App;
    }
)(window)
