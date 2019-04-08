const employees = new App.Employees();
const company = new App.Company("Orange",employees);
function createEmployee(id,email,gender,salary,name,title) {
    return {id,email,gender,salary,name,title};
}
