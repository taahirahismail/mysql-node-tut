module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    
    var router = require('express').Router();

    // new tutorial
    router.post("/", tutorials.create);

    // retrieve all tutorials
    router.get("/", tutorials.findAll);

    // retrieve published tutorials
    router.get("/published", tutorials.findAllPublished);

    // retrieve single tutorial (id)
    router.get("/:id", tutorials.findOne);

    // update tutorial (id)
    router.put("/:id", tutorials.update);

    // delete tutorial (id)
    router.delete("/:id", tutorials.delete);

    // delete all tutorials
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
}