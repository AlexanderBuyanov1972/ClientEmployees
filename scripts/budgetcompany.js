(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function BudgetCompany(selector) {
            this.$element = $(selector);
            if (!this.$element) {
                throw Error('Wrong selector');
            }
            if (this.$element.length === 0) {
                throw Error('Selector does not look as check list.');
            }
        }

        BudgetCompany.prototype.insertToBudgetRow=function (salary) {
            this.$element.empty()
                .append(`Total salary budget is ${salary}`);
        }


        App.BudgetCompany = BudgetCompany;
        window.App = App;
    }
)(window)
