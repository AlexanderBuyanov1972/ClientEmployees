(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function FormHandler(selector) {
            if (!selector)
                throw Error('Selector is not exists...');
            this.$elementForm = $(selector);
            if (!this.$elementForm.length === 0)
                throw Error('Wrong selector...');
        }

        FormHandler.prototype.addFormHandler = function (fn) {
            this.$elementForm.on('submit', function (event) {
                event.preventDefault();
                let employee = {};
                $(this).serializeArray().forEach(function (item) {
                    if (item.name === 'id' || item.name === 'salary') {
                        item.value = parseInt(item.value);
                    }
                    employee[item.name] = item.value;
                });
                fn(employee);
                // this.reset();
                // this.elements[0].focus();
            });
        }

        App.FormHandler = FormHandler;
        window.App = App;
    }
)(window)
