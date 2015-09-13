var util = {};
module.exports = util = {
    fetchMarkdown: function(contentsRoot, extName, callback){
        var glob = require("glob");
        glob(contentsRoot + "/**/*." + extName, function(err, files){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, files);
            return;
        });
    }
}
