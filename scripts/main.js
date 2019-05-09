let employees = new App.Employees();

let company = new App.Company('TelRan',employees);

let formHandler = new App.FormHandler('[data-employee-form="form"]');

formHandler.addFormHandler(function (employee) {
    company.hire(employee);
});

