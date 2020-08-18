var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://mor-db-user:TvT0AeESfNG5VVZl@ip3-moringa.kq5e1.mongodb.net/<dbname>?retryWrites=true&w=majority',
    development: 'mongodb+srv://mor-db-user:TvT0AeESfNG5VVZl@ip3-moringa.kq5e1.mongodb.net/<dbname>?retryWrites=true&w=majority',
    test: 'mongodb+srv://mor-db-user:TvT0AeESfNG5VVZl@ip3-moringa.kq5e1.mongodb.net/<dbname>?retryWrites=true&w=majority',
}
module.exports = config;
