(function (window) {
    let App = window.App || {}

    function Employees() {
        this.data = {};
        Employees.prototype.add = function (key, employee) {
            if (this.data[key]) {
                return false;
            }
            this.data[key] = employee;
            return true;
        }
        Employees.prototype.get = function (key) {
            if (this.data[key]) {
                return this.data[key];
            }
            return false;
        }
        Employees.prototype.getAll = function () {
            return Object.values(this.data);
        }
        Employees.prototype.remove = function (key) {
            if (this.data[key]) {
                delete this.data[key];
                return true;
            }
            return false;
        }
    }

    App.Employees = Employees;
    window.App = App;
})(window)