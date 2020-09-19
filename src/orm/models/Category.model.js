const { DataTypes } = require('sequelize');
export default (sequelize, {UUID,UUIDV4,STRING})=>{
    const Category = sequelize.define('Category',{
        id:{
            primaryKey:true,
            allowNull: false,
            type:UUID,
            defaultValue: UUIDV4()
        },
        name:{
            type:STRING,
            allowNull:false
        }
    })

    return Category
}