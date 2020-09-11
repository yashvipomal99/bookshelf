const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.bookname) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const book = {
      bookname: req.body.bookname,
      authorname: req.body.authorname,
      publicationname: req.body.publicationname,
      publicationdate: req.body.publicationdate,
      synopsis: req.body.synopsis,
      isbn: req.body.isbn,
      avgreview: req.body.avgreview,
      totalreviews: req.body.totalreviews
    };
    
    Book.create(book)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Book."
        });
      });
  };

  exports.findAll = (req, res) => {
    const bookname = req.query.bookname;
    var condition = bookname ? { bookname: { [Op.like]: `%${bookname}%` } } : null;
  
    Book.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Books."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Book.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Book with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Book.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Book was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Book with id=${id}. Maybe Book was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Book with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Book.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Book was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Book with id=" + id
        });
      });
  };
