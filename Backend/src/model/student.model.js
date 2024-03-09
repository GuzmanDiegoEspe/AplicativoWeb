
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('colegio', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

class Student extends Model { }
    
Student.init(
    {
        id_student: {
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
        group: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize, // We need to pass the connection instance
        modelName: 'Student' // We need to choose the model name
    }
);

module.exports = Student;

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