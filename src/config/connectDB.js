const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '85.195.73.202',
    user: 'win1209_ggclubuser',
    password: '76440@Rishu$',
    database: 'win1209_ggclub',
});

export default connection;