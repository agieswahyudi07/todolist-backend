const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  console.log('Database syncronized');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
