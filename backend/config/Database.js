import { Sequelize } from "sequelize";

const db = new Sequelize('project_massive', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
});

export default db;
