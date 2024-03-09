
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('colegio', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

class Teacher extends Model { }
    
Teacher.init(
    {
        id_teacher: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        id_card: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize, // We need to pass the connection instance
        modelName: 'Teacher' // We need to choose the model name
    }
);

module.exports = Teacher;

/*
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("All Good!!")
    } catch (err) {
        console.error("All Bad!!", err)
    }
}
testConnection();
*/