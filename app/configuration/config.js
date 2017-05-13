Config = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DATABASE_HOST || '127.0.0.1',
        database: 'dddnodejs',
        user: 'root',
        password: 'root',
        port: 8889 
    }
}

module.exports = Config;