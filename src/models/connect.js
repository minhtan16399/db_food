import { Sequelize }  from 'sequelize';

const sequelize = new Sequelize('db_food', 'root', '1234', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default sequelize;