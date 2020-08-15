const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const connection = () => (
  mongoClient
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(conn => conn.db(process.env.DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
);

module.exports = connection;
