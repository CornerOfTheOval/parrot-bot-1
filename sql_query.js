module.exports.getWords = function(callback) {
    
    con.query('SELECT * from word_table', function(err, rows, fields) {
        connection.end();
        
        if (!err)
            return callback(null, rows);
        else
            return callback('Error while performing Query.');
    });

}