(
    function (window) {
        let App = window.App || {};

        function Employees() {
            this.salary = 0;
            this.data = {};
        }

        function createPromise(value){
            return new Promise(function(resolve,reject){
                resolve(value);
            })
        }

        Employees.prototype.add = function (id, employee) {
            if (this.data[id]) {
                return createPromise(false);
            }
            this.data[id] = employee;
            this.salary += employee.salary;
            return createPromise(true);
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
                this.salary -= result.salary;
                delete this.data[id];
                return createPromise(true);
            }
            return createPromise(false);
        }

        Employees.prototype.getAll = function () {
            return createPromise(this.data);
        }

        Employees.prototype.removeAll = function () {
            this.data = {};
        }

        Employees.prototype.getSalary = function () {
            return this.salary;
        }

        App.Employees = Employees;
        window.App = App;
    }
)(window)
