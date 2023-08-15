const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// create and save new tutorial
exports.create = (req, res) => {
    // validate req
    if (!req.body.title) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    // create tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // save tutorial in db
    Tutorial.create(tutorial)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the tutorial."
        });
    });
};

// retrieve all tutorials from db
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {title: { [Op.like]: `%${title}%`}} : null;

    Tutorial.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tutorials."
        });
    });
};

// find single tutorial with id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message:`Cannot find tutorial with id = ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving tutorial with id = " + id
        });
    });
};

// update tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tutorial.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Tutorial updated successfully!"
            });
        } else {
            res.send({
                message: `Cannot update tutorial with id = ${id}. Maybe tutorial was not found or req.body is empty.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating tutorial with id = " + id
        });
    });
};

// delete tutorial with the specified id in req
exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.destroy({
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Tutorial deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Tutorial with id = ${id}. Maybe tutorial was not found.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete tutorial with id = " + id
        });
    });
};

// delete all tutorials from db
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} tutorials were deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all tutorials."
        });
    });
};

// find all published tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({
        where: {published: true}
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tutorials."
        });
    });
};



// const Tutorial = require("../models/tutorial.model.js");

// // create and save a new tutorial
// exports.create = (req, res) => {
//     // validate req
//     if (!req.body) {
//         res.status(400).send({
//             message: "Content cannot be empty, silly!"
//         });
//     }

//     // create tut
//     const tutorial = new Tutorial({
//         title: req.body.title,
//         description: req.body.description,
//         published: req.body.published || false
//     });

//     // save tut in db
//     Tutorial.create(tutorial, (err, data) => {
//         if (err) {
//             res.status(500).send({
//                 message: err.message || "An error occurred while creating the tutorial :("
//             });
//         } else res.send(data);
//     });
// };

// // retrieve all tuts from database (conditional)
// exports.findAll = (req, res) => {
//     const title = req.query.title;

//     Tutorial.getAll(title, (err, data) => {
//         if (err) {
//             res.status(500).send({
//                 message: err.message || "An error occurred while retrieving tutorials :("
//             });
//         } else res.send(data)
//     });
// };

// // find single tutorial (by id)
// exports.findOne = (req, res) => {
//     Tutorial.findById(req.params.id, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Tutorial with id ${req.params.id} not found :(`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Error retrieving tutorial with id " + req.params.id
//                 });
//             }
//         } else res.send(data);
//     });
// };

// // find all published tuts
// exports.findAllPublished = (req, res) => {
//     Tutorial.getAllPublished((err, data) => {
//         if (err) {
//             res.status(500).send({
//                 message: err.message || "An error occurred while retrieving tutorials :("
//             });
//         } else res.send(data);
//     });
// };

// // update tut (identified by id in req)
// exports.update = (req, res) => {
//     // validate req
//     if (!req.body) {
//         res.status(400).send({
//             message: "Content cannot be empty, silly!"
//         });
//     }

//     console.log(req.body);

//     Tutorial.updateById(
//         req.params.id,
//         new Tutorial(req.body),
//         (err, data) => {
//             if (err) {
//                 if (err.kind === "not_found") {
//                     res.status(404).send({
//                         message: `Tutorial with id ${req.params.id} not found :(`
//                     });
//                 } else {
//                     res.status(500).send({
//                         message: "Error updating tutorial with id " + req.params.id
//                     });
//                 }
//             } else res.send(data);
//         }
//     );
// };

// // delete tutorial (identified by id in req)
// exports.delete = (req, res) => {
//     Tutorial.remove(req.params.id, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Tutorial with id ${req.params.id} not found :(`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Could not delete tutorial with id " + req.params.id
//                 });
//             }
//         } else res.send({message: `Tutorial deleted successfully!`});
//     });
// };

// // delete all tutorials from db
// exports.deleteAll = (req, res) => {
//     Tutorial.removeAll((err, data) => {
//         if (err) {
//             res.status(500).send({
//                 message: err.message || "An error occurred while removing all tutorials :("
//             });
//         } else res.send({message: `All tutorials deleted successfully!`});
//     });
// };