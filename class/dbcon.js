const {Pool} = require('pg')

// Postgress connecotr
const pool = new Pool ({
    use: '',
    password: '',
    host: '',
    port: 5432,
    database: 'cis493'
})

// export query from database
module.exports = {
    query: (text, param) => pool.query(text,params)
}