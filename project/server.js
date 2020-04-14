const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 8080;
var ObjectId = require('mongodb').ObjectID;
// << db setup >>
const db = require("./db");
const dbName = "GEIPAN";
const collectionName = "ListeCas";
const collectionName2 = "Listetemoignages";

// << db init >>
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback

    // get all items
    server.get("/api", (request, response) => {
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
          console.log(result);
          console.log("taaaraaaa")
          return response.json(result)
    });
    });

    // << db CRUD routes >>
    //get one
    server.get("/api/:id", (request, response) => {
        const itemId = request.params.id;
    
        dbCollection.findOne({ id: itemId }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

}, function(err) { // failureCallback
    throw (err);
});


db.initialize(dbName, collectionName2, function(dbCollection) { // successCallback

    // get all items
    server.get("/Listetemoignages/:id_cas", (request, response) => {
        var idcas = request.params.id_cas;
        var oidcas = parseInt(idcas)
        console.log(oidcas)
    dbCollection.find({id_cas:oidcas}).toArray(function(err, result) {
        console.log(idcas)
        if (err) throw err;
          console.log(result);
          console.log("taaaraaaa")
          return response.json(result)
    });
    });


}, function(err) { // failureCallback
    throw (err);
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});