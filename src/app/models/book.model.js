module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      bookname: {
        type: Sequelize.STRING,
      },
      authorname: {
        type: Sequelize.STRING,
      },
      publicationname: {
        type: Sequelize.STRING,
      },
      publicationdate: {
        type: Sequelize.DATE,
      },
      synopsis: {
        type: Sequelize.STRING,
      },
      isbn: {
        type: Sequelize.INTEGER,
      },
      avgreview: {
        type: Sequelize.DECIMAL(3,1),
      },
      totalreviews: {
        type: Sequelize.INTEGER,
      }
    });
  
    return Book;
  };