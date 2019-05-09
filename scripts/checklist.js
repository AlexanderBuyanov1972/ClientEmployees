(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function Row(employee) {
            let $div = $('<div></div>', {
                class: 'form-check',
                "data-employee-role": 'checkbox'
            });

            let $label = $('<label></label>', {
                class: 'form-check-label'
            });

            let $input = $('<input>', {
                type: 'checkbox',
                class: 'form-check-input',
                value: employee.id
            });

            let content = `${employee.id},${employee.name},${employee.gender},
            ${employee.email},${employee.salary},${employee.company},${employee.title}`;
            $label.append($input).append(content);
            $div.append($label);
            this.$rowElement = $div;
        }

        function CheckList(selector) {
            this.$checkList = $(selector);
            if (!this.$checkList) {
                throw Error('Wrong selector');
            }
            if (this.$checkList.length === 0) {
                throw Error('Selector does not look as check list.');
            }
        }

        CheckList.prototype.addHandler = function (fn) {
            this.$checkList.on('click','input', function (event) {
                event.preventDefault();
                fn(event.target.value);
            });
        }


        CheckList.prototype.addRow = function (employee) {
            let row = new Row(employee);
            this.$checkList.append(row.$rowElement);
        }

        CheckList.prototype.removeRow = function (id) {
            this.$checkList.find(`[value="${id}"]`).closest("[data-employee-role='checkbox']").remove();
        }

        CheckList.prototype.removeAllRow = function () {
            this.$checkList.empty();
        }

        App.CheckList = CheckList;
        window.App = App;
    }
)(window)
