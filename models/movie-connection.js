'use strict';
var mysql = require("mysql"),
    conf = require("./db-conf").mysql,
    dbOptions={
        host: conf.host,
        port: conf.port,
        user: conf.user,
        password: conf.pass,
        database: conf.db
    },
    myConn = mysql.createConnection(dbOptions);

    myConn.connect((err)=>{
        return (err) ? console.log(`Error al conectarse a MySQL: ${err.stack}`) : console.log(`Conexión establecida con MySQL N°: ${myConn.threadId}`);
    });
    module.exports = myConn;