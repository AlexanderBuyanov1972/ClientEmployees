(
    function (window) {
        let App = window.App || {}
        function FormHandler(selector) {
            if (!selector) {
                throw Error("Selector is not provided");
            }
            this.$fromElement = $(selector);
            if (this.$fromElement.length === 0) {
                throw Error(selector + " is not exists")
            }
            FormHandler.prototype.addSubmitHandler = function (fn) {
                this.$fromElement.on('submit', function (event) {
                    event.preventDefault();
                    let employee = {};
                    s(this).serializeArray().forEach(function (item) {
                        if (item.name == 'salary') {
                            item.value = parseInt(item.value);
                        }
                        employee[item.name] = item.value;
                    });
                    fn(employee);
                    this.reset();
                    this.elements[0].focus();
                })
            }
        }
        App.FormHandler = FormHandler;
        window.App = App;
    }
)(window)