module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Tutorial;
};

// const sql = require("./db.js");

// // constructor
// const Tutorial = function(tutorial) {
//     this.title = tutorial.title;
//     this.description = tutorial.description;
//     this.published = tutorial.published;
// };

// // function to create a new tutorial
// Tutorial.create = (newTutorial, result) => {
//     sql.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         console.log("tutorial created: ", {id: res.insertId, ...newTutorial});
//         result(null, {id: res.insertId, ...newTutorial});
//     });
// };

// // function to find and read specific (or all) tutorials
// Tutorial.findById = (id, result) => {
//     sql.query(`SELECT * FROM tutorials WHERE id = ${id}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             console.log("tutorial found: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         // tutorial with specified id not found
//         result({kind: "not_found"}, null);
//     });
// };

// Tutorial.getAll = (title, result) => {
//     let query = "SELECT * FROM tutorials";

//     if (title) {
//         query += ` WHERE title LIKE '%${title}%'`;
//     }

//     sql.query(query, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         console.log("tutorials: ", res);
//         result(null, res);
//     });
// };

// Tutorial.getAllPublished = result => {
//     sql.query("SELECT * FROM tutorials WHERE published = true", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         console.log("tutorials: ", res);
//         result(null, res);
//     });
// };

// // update function
// Tutorial.updateById = (id, tutorial, result) => {
//     sql.query("UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?", [tutorial.title, tutorial.description, tutorial.published, id], (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         if (res.affectedRows === 0) {
//             // tutorial with specified id not found
//             result({kind: "not_found"}, null);
//             return;
//         }

//         console.log("tutorial updated: ", {id: id, ...tutorial});
//         result(null, {id: id, ...tutorial});
//     });
// };

// // delete function
// Tutorial.remove = (id, result) => {
//     sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         if (res.affectedRows === 0) {
//             // tutorial with specified id not found
//             result({kind: "not_found"}, null);
//             return;
//         }

//         console.log("tutorial deleted with id: ", id);
//         result(null, res);
//     });
// };

// Tutorial.removeAll = result => {
//     sql.query("DELETE FROM tutorials", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         console.log(`deleted ${res.affectedRows} from tutorials`);
//         result(null, res);
//     });
// };

// module.exports = Tutorial;