(
    function (window) {
        let App = window.App || {};

        function Employees() {
            this.salary = 0;
            this.data = {};
        }
        Employees.prototype.getSalary = function(){
            return this.salary;
        }

        Employees.prototype.add = function (id, employee) {
            if (this.data[id]) {
                return false;
            }
            this.data[id] = employee;
            this.salary += employee.salary;
            return true;
        }
        Employees.prototype.get = function (id) {
            let result = this.data[id];
            if (result)
                return result;
            return {};
        }
        Employees.prototype.remove = function (id) {
            let result = this.data[id];
            if (result) {
                delete this.data[id];
                return true;
            }
            return false;
        }

        Employees.prototype.getAll = function () {
            return this.data;
        }

        Employees.prototype.removeAll = function () {
            this.data = {};
        }

        App.Employees = Employees;
        window.App = App;
    }
)(window)
