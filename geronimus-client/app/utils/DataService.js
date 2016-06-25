var $ = require('jquery');
function DataService() {
    this.base_url = "http://localhost:3000";


}

DataService.prototype.ls = function (path) {

    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            data: {
                path: path
            },
            dataType: "json",
            url: this.base_url + '/ls',
            success: function (data) {
                resolve(data);
            },
            error: reject
        });
    });

};


module.exports = DataService;