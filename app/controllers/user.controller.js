const db = require("../models");
// const User = db.user;
// const Op = db.Sequelize.Op;
// Create and Save a new Ticket
// const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const Joi = require("joi");

// Validation schema for user creation
const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request body
  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(400).send({
      message: error.details[0].message
    });
    return;
  }

  // Create a user
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  // Save user in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user."
      });
    });
};
// Retrieve all users from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    User.findAll({ })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Tickets."
        });
      });
  };

// Find a single users with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find user with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user with id=" + id
        });
      });
  };
  const userUpdateSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });
// Update a user by the id in the request
exports.update = (req, res) => {
  const { error } = userUpdateSchema.validate(req.body);
  if (error) {
    res.status(400).send({
      message: error.details[0].message
    });
    return;
  }
    const id = req.params.id;
  
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "user was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Ticket with id=" + id
        });
      });
  };

// Delete a Ticket with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ticket was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Ticket with id=${id}. Maybe Ticket was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Ticket with id=" + id
        });
      });
  };

// Delete all Tickets from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tickets were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Tickets."
        });
      });
  };

// Find all published Tickets
exports.findAllPublished = (req, res) => {
  User.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Tickets."
        });
      });
  };