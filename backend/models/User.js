import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    university: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    program: {
        type: DataTypes.STRING,
        allowNull: true
    },
    semester: {
        type: DataTypes.STRING,
        allowNull: true
    },
    whatsappNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nim: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true
});

export default User;
