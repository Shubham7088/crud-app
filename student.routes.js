const express = require('express');

const app = express.Router();
let StudentSchema = require('../model/student.model');

app.get('/', async (req, res) => {
    try {
        // console.log('get received',req);
        const articles = await StudentSchema.find({ id1: req.params.id });
        res.send(articles);
        // console.log(req);
    } catch (err) {
        console.log(err);
    }
})
app.get('/edit-student/:id', async (req, res) => {
    try {
        // console.log('get received',req);
        const articles = await StudentSchema.findById({ _id: req.params.id });
        res.send(articles);
        // console.log(req);
    } catch (err) {
        console.log(err);
    }
})

app.post('/add-student', async (req, res) => {
    let post = new StudentSchema(req.body)
    try {
        const articles = await post.save()
        res.send(articles);

    } catch (err) {
        console.log(err);
    }
  
})

app.delete('/del-student/:id', async (req, res) => {
    try {
        const articles = await StudentSchema.findOneAndRemove({ _id: req.params.id });
        res.send(articles);
        // console.log(req);
    } catch (err) {
        console.log(err);
    }
})

app.put('/update-student/:id', async (req, res) => {
    try {
        const articles = await StudentSchema.findOneAndUpdate ({_id: req.params.id},req.body);
        res.send(articles);
        // console.log(req);
    } catch (err) {
        console.log(err);
    }
})









module.exports = app;