// var api = require('./jsonApi');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/memo.db');

db.serialize(function(){

    var stmt = db.prepare('INSERT INTO table_user VALUES (?)');
    for(var i = 0; i < 10; i++){
        stmt.run("fasdf");
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM table_user", function(err ,row){
        console.log(row.id + ":" + row.info );
    });
});

// api.exportsArticle(__dirname + "/contents", "md", function(err, files){
// });
