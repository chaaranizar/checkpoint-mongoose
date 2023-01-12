// 1 require express
const express = require("express");
const Contact = require("../models/Contact");

// 2 express router
const router = express.Router();

/// Routes

/**
 * @desc : testing route
 * @path : http://localhost:4300/api/contact/test
 * @method : GET
 * @data : no Data
 */
router.get("/test", (req, res) => {
    res.send("Hello World");
});

/**
 * @desc : adding contact
 * @path : http://localhost:4300/api/contact/add
 * @method : POST
 * @data : req.body
 */
router.post("/add", async (req, res) => {
    try {
        const {name, age, email, phone} = req.body;
        const newContact = new Contact ({name, age, email, phone});
        await newContact.save();
        res.status(200).send({msg :"Contact added successfully...", newContact});
    
    } catch (error) {
        res.status(400).send({msg : "Contact cannot be added!!!", error});
    }
});
/**
 * @desc : get all contact
 * @path : http://localhost:4300/api/contact/all
 * @method : GET
 * @data : no Data
 */
router.get("/all", async (req, res) => {
    try {
        const listContacts = await Contact.find();
        res.status(200).send({msg :"This is the list of all contacts...", listContacts});
    } catch (error) {
        res.status(400).send({msg : "cannot get all contact!!!", error});
    }
});
/**
 * @desc : get one contact
 * @path : http://localhost:4300/api/contact/:id
 * @method : GET
 * @data : req.params._id
 */
router.get("/:id", async (req, res) => {
    try {
        const oneContact = await Contact.findOne ({_id :req.params.id});
        res.status(200).send({msg : "Contact found...", oneContact});
    } catch (error) {
        res.status(400).send({msg : "Contact not found!!!", error});
    }
});
/**
 * @desc : delete contact
 * @path : http://localhost:4300/api/contact/:_id
 * @method : DELETE
 * @data : req.params._id
 */
router.delete("/:_id", async (req, res) => {
    try {
        const deletedContact = await Contact.findOneAndDelete({_id : req.params._id});
        res.status(200).send({ msg : "Contact deleted...", deletedContact});
    } catch (error) {
        res.status(400).send ({msg : "Contact cannot be deleted!!!", error});
    }
});
/**
 * @desc : edit contact
 * @path : http://localhost:4300/api/contact/:_id
 * @method : PUT
 * @data : req.params._id, req.body
 */
router.put("/:_id", async (req, res) => {
    try {
        const contactUpdated = await Contact.findOneAndUpdate({_id : req.params._id}, {$set: {"name" : req.body.name, "age" : req.body.age, "email" : req.body.email, "phone" :req.body.phone}});
        res.status(200).send({msg :"Contact updated...", contactUpdated});
    } catch (error) {
        res.status(400).send({msg : "Cannot update contact!!!", error});
    }
});
// 3 export
module.exports = router;