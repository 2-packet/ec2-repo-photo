const { Pool } = require('pg');

const pool = new Pool({
  host: '3.16.89.126',
  user: 'postgres',
  password: 'postgres',
  database: 'photosdb',
  port: 5432
});

const getAllPhotos = (id, callback) => {
  console.log('db id:', id)
  pool.query(`SELECT * FROM photos WHERE rest_id = ${id}`, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

module.exports = {
  getAllPhotos,
}