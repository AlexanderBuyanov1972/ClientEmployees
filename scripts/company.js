(
    function (window) {
        let App = window.App || {}

        function Company(nameCompany, employees) {
            this.nameCompany = nameCompany;
            this.employees = employees;
            Company.prototype.hire = function (employee) {
                if (!employee.id) {
                    throw Error("id not found in employee")
                }
                return this.employees.add(employee.id, employee);
            }
            Company.prototype.fire = function (id) {
                return this.employees.remove(id);
            }
            Company.prototype.computeSalaryBudget = function () {
                return this.employees.getAll().reduce(function (res, current) {
                    return res + current.salary;
                }, 0)
            }
            Company.prototype.printEmployees = function () {
                this.employees.getAll().forEach(e => {
                    console.log(e);
                })
            }
        }

        App.Company = Company;
        window.App = App;
    })(window)