const Sequelize = require('sequelize');

export default () => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './storage.sqlite'
  });

  const Users = sequelize.import('./models/users')

  return { Users }
}