var fs = require('fs');
var path = require('path');

module.exports = {
    ls: function (filepath) {
        var result = [];
        return new Promise(function (resolve, reject) {

            try{
                var items = fs.readdirSync(filepath);

                items = items.filter(function (item) {
                    return typeof item === 'string';
                });

                items.forEach(function (item) {

                    var info = getFileInfo(filepath, item);
                    if(info !== undefined){
                        result.push(info);
                    }

                });
                resolve(result);
            } catch (e){
                reject(e);
            }


        });

    }
};

function getFileInfo (filepath, file){
    try {
        var stats = fs.statSync(filepath + '/' + file);
        var result = {
            type: (stats.isDirectory())? 'directory': 'file',
            path: filepath,
            name: file,
            extension: path.extname(file),
            size: stats.size,
            fullpath: (filepath !== '/')? filepath + '/' + file : '/' + file
        }
    }catch (e){

    }

    return result;
}