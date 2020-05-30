module.exports = (sequelize, DataTypes) => {

  class Books extends sequelize.Sequelize.Model { }
  Books.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    imgUrl: {
      field: 'img_url',
      type: DataTypes.STRING
    },
    amountSold: {
      field: 'amount_sold',
      type: DataTypes.INTEGER
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'books'
  })

  return Books
}