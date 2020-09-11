const db = require("../models");
const Review = db.reviews;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.rating) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const review = {
      rating: req.body.rating,
      description: req.body.description,
    };
    
    Review.create(review)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Review."
        });
      });
  };

