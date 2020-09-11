module.exports = app => {
    const reviews = require("../controllers/review.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", reviews.create);
  
    app.use('/api/reviews', router);

  };