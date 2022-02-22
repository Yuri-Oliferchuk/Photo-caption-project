const {pool} = require('../config.js');

const findById = async (id, cb) => {
    const sql = 'SELECT * FROM users WHERE id = $1;'
    const result = await pool.query(sql, [id])
    process.nextTick(function () {
      if (result.rows[0].id) {
        cb(null, result.rows[0]);
      } else {
        cb(new Error("User " + id + " does not exist"));
      }
    });
  };
  
const findByUsername = async (username, cb) => {
    const sql = 'SELECT * FROM users WHERE username = $1;'
    const result = await pool.query(sql, [username])
    
    process.nextTick(function () {
        if (result.rows[0]) {
            return cb(null, result.rows[0]);
        }
      return cb(null, null);
    });
  };

module.exports = {
    findById,
    findByUsername
}