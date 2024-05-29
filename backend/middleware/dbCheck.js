import db from '../config/Database.js';

const dbCheck = async (req, res, next) => {
  try {
    await db.authenticate();
    console.log('Database connection is still alive.');
    next();
  } catch (err) {
    console.error('Database connection lost:', err.message);
    return res.status(500).json({ msg: 'Database connection lost. Please try again later.' });
  }
};

export default dbCheck;
