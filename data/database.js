const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
    if (_db) {
        console.warn('Trying to init DB again!');
        return callback(null, _db);
        }
        MongoClient.connect(process.env.MONGODB_URL)
            .then((client) => {
                _db = client.db("project1");
                return callback(null, _db);
            })
            .catch((err) => {
                return callback(err);
            });
};

const getDb = () => {
    if (!_db) {
        throw new Error('Database not initialized');
    }
    return _db;
};

module.exports = {
    initDb,
    getDb,
};