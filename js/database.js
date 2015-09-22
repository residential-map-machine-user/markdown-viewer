var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/db_codestack.db');
var namespace = {};
module.exports = namespace = {
    createTable : function(){
        db.serialize(function(){
            db.run('CREATE TABLE table_codestack (id_codestack INTEGER PRIMARY KEY, category TEXT, genre TEXT, title TEXT, contents TEXT, created_dt TEXT, updated_dt TEXT)');
        });
    },
    insertCodeInfo: function(category, genre, title, contents, created_dt){
        db.serialize(function(){
            var stmt = db.prepare('INSERT INTO table_codestack(category, genre, title, contents, created_dt) VALUES (?,?,?,?,?)');
            stmt.run(category, genre, title, contents, created_dt);
            stmt.finalize();
            // db.each('SELECT * from table_codestack',function(err, row){
            //     console.log(row);
            // })
        });
    },
    selectCodeInfo:function(){
        db.serialize(function(){
            var dataArray = [];
            db.each('SELECT * FROM table_codestack', function(err, rows){
                // console.log(rows.category);
                dataArray.push(rows.category);
            });
            return dataArray;
        });
    },
    deleteCodeInfo:function(){
        db.serialize(function(){
            db.all('DELETE FROM table_codestack');
        });
    }
};
