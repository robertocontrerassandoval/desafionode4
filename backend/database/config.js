//configuracion de la bd

import pg from 'pg';


const pool = new pg.Pool({
    host:'localhost',
    user:'postgres',
    password:'2857',
    database:'likeme',
    allowExitOnIdle: true
})

pool.query('SELECT NOW()', (err, res) =>{
    if(err) {
        console.log('Error de conexión base de datos', err.message);
    } else {
        console.log('✅ BD conected ✅', res.rows.now);
    }
})

export default pool;