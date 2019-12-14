module.exports = {
    'secret': 'test123',
    development: {
        client: 'postgresql',
        connection: {
            user: 'postgres',
            password: 'admin123',
            database: 'aeione'
        },
        migrations: {
            directory: __dirname + '/migrations'
        },
        seeds: {
            directory: __dirname + '/seeds'
        }
    }
}