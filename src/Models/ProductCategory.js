module.exports = function(sequelize, DataTypes){
    return sequelize.define('ProductCategory', {
        category_id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true, },
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: true },
        category_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true },
        category_description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        category_status:{
            type: DataTypes.ENUM('1', '2', '3', '4'),
            allowNull: false,
            defaultValue: '1'
        }
    },{
        tableName: 'product_category',
        timestamps: true
    });
};