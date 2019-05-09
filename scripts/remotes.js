(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function RemoteDataStore(url) {
            if (!url)
                throw Error('Url is not exists.');
            this.urlServer = url;
        }

        RemoteDataStore.prototype.add = function(id,employee,cb){
            $.ajax({
                url: this.urlServer + '/add',
                type: 'POST',
                data: JSON.stringify(employee),
                contentType: 'application/json',
                success: function (res) {
                   cb(res) ;
                }
            });
            return true;
        }
        RemoteDataStore.prototype.remove = function(id){
            $.ajax({
                url:this.urlServer + '/remove?id='+encodeURIComponent(id),
                type: 'DELETE',
                success: function (res) {
                    console.log(res);
                }
            });
            return true;
        }
        RemoteDataStore.prototype.getAll = function(){
            $.ajax({
                url: this.urlServer+'/getAll',
                type: 'GET',
                success : function (res) {
                    console.log(res);
                }
            });
        }

        RemoteDataStore.prototype.get = function(id){
            $.ajax({
                url: this.urlServer+'/get?id='+encodeURIComponent(id),
                success: function (res) {
                    return res;
                }
            });
        }

            App.RemoteDataStore = RemoteDataStore;
        window.App = App;

    }
)()
