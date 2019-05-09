(
    function (window) {
        let App = window.App || {};

        function Company(nameCompany, employees) {
            this.nameCompany = nameCompany;
            this.employees = employees;
        }

        Company.prototype.hire = function (employee) {
            if (!employee.id)
                throw Error('id not found in employee');
            return this.employees.add(employee.id, employee);
        }

        Company.prototype.fire = function (id) {
            return this.employees.remove(id);
        }
        Company.prototype.printEmployees = function () {
            console.log("Company " + this.nameCompany + " contains following employees: ");
            this.employees.getAll().forEach(function (employee) {
                console.log(employee);
            })
        }
        Company.prototype.computeSalaryBudget = function () {
            return this.employees.getSalary();
        }
        App.Company = Company;
        window.App = App;
    }
)(window)
