var mysql = require('mysql')
    
var connection;

module.exports = {
    
  connect: function () {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'sigodin',
    password: ''
    })
    connection.connect()    

  },
  
    query: function (QueryString) {
        connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
            if (err) throw err

        console.log('The solution is: ', rows[0].solution)
    })
},

  
  disconnect: function () {
    connection.end()      
  }
};




