(
    function (window) {
        let App = window.App || {};

        function Company(nameCompany, employees) {
            this.nameCompany = nameCompany;
            this.employees = employees;
        }

        Company.prototype.hire = function (employee) {
            return this.employees.add(employee.id, employee);
        }

        Company.prototype.fire = function(id){
            return this.employees.remove(id);
        }
        Company.prototype.computeSalaryBudget = function(){
            return this.employees.getSalary();
        }
        App.Company = Company;
        window.App = App;
    }
)(window)
