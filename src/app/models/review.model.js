module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
      rating: {
        type: Sequelize.DECIMAL(3,1),
      },
      description: {
        type: Sequelize.STRING,
      },
      
    });
  
    return Review;
  };