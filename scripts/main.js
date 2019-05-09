(
    function (window) {
       let App = window.App || {};

        const MIN_SALARY=8000;
        const MAX_SALARY=50000;
        const EMPLOYEE_FORM_SELECTOR='[data-employee-form="form"]';
        const CHECKLIST_SELECTOR='[data-employee-list="list"]';
        const SALARY_SELECTOR='[data-budget-role="budget"]';
        const ID_INPUT_SELECTOR='[data-employee-role="id_input"]';
        const EMAIL_INPUT_SELECTOR='[data-employee-role="email_input"]';
        const SALARY_INPUT_SELECTOR='[data-employee-role="salary_input"]';

        let employees = new App.Employees();
        //let employees=new App.RemoteDataStore('http://localhost:2000');
        let company = new App.Company('TelRan', employees);
        let formHandler = new App.FormHandler(EMPLOYEE_FORM_SELECTOR);
        let checkList = new App.CheckList(CHECKLIST_SELECTOR);
        let budgetCompany = new App.BudgetCompany(SALARY_SELECTOR);
//**************************************************************************************
       // let login = new App.Login();
       // let navigator = new App.Navigator();
       //  if(sessionStorage.getItem('token')){
       //      navigator.toggleEmployees();
       //      navigator.showEmployees();
       //  }else {
       //      navigator.toggleLogin();
       //      navigator.showLogin();
       //  }

        // login.addHandler(function(credentials){
        //     return employees.login(credentials).then((jwt)=>{
        //         sessionStorage.setItem('token',jwt);
        //         navigator.toggleEmployees();
        //         navigator.showEmployees();
        //
        //     }).catch(function () {
        //         alert('authentication error');
        //     })
        // })

       //  formHandler.addSubmitHandler(function (employee) {
       //      return company.hire(employee);
       //  });
       //
       //  checkList.addInputHandler(function (id) {
       //      return company.fire(id);
       //  });

       // const webClient = new App.WebClient("ws://localhost:2000/socket",function (id) {
       //      budgetSalary.drawSalary
       //      (company.computeSalaryBudget());
       //      checkList.removeRow(id);
       //  }, function(employee){
       //      budgetSalary.drawSalary
       //      (company.computeSalaryBudget());
       //      checkList.addRow(employee);
       //  });

        formHandler.addInputHandler(function (id) {
            let res="";
            if (employees.get(id))
                res = "already exists";
            return res;
        },ID_INPUT_SELECTOR);

        formHandler.addInputHandler(function (salaryStr) {
            let res="";
            let salary=parseInt(salaryStr);
            if (salary<MIN_SALARY || salary > MAX_SALARY)
                res = `salary should be in [${MIN_SALARY}-${MAX_SALARY}] range` ;
            return res;
        },SALARY_INPUT_SELECTOR);

        let lastEmployees={};
        function displayEmployees(){
            employees.getAll().then(function (response) {
                Object.values(response).forEach
                (function (employee) {
                    checkList.addRow(employee);
                });
                budgetCompany.insertToBudgetRow(company.computeSalaryBudget());
            });
        }
        displayEmployees();
        //setInterval(displayEmployees,1000);
//***************************************************************************************

        formHandler.addFormHandler(function (employee) {
            if (company.hire(employee)) {
                checkList.addRow(employee);
                budgetCompany.insertToBudgetRow(company.computeSalaryBudget());
            }

        });
        checkList.addHandler(function (id) {
            if (company.fire(id)) {
                checkList.removeRow(id);
                budgetCompany.insertToBudgetRow(company.computeSalaryBudget());
            }
        })
        window.App = App;
    }
)(window)



