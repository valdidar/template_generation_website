const { time } = require('console');
const express = require('express');
const path = require('path');
const fs = require('fs')
const templates = require(path.join('../data/templates'))
const users = require(path.join('../data/users'))
const sendError = require(path.join('../middleware/error'))
const router = express.Router()

// here we can browse all the templates
router.get('^/$|/use-template?', (req, res) => {
    res.render('home', {
        templates: templates
    })
})

// here we can use a template
router.get('/use-template/:slug', (req, res) => {
    console.log(req.params.slug)
    myTemplate = templates.filter(templates => {
        return templates.slug==req.params.slug
    })
    if(myTemplate.length==0) {
        res.status(404).send("Template not found")
        return
    }
    //makes preText from text to preserve the formatting
    console.log(myTemplate)
    let preText = myTemplate[0].text
    while(preText.includes("\n") || preText.includes("\t")) {
        preText = preText.replace( "\n", "<br>").replace( "\t", "&nbsp;&nbsp;&nbsp;&nbsp;")
    }
    res.render('use-template', {
        name: myTemplate[0].name,
        text: myTemplate[0].text,
        preText: preText,
    })
})

// // here we redirect to my profile page
// router.get('/:username', (req, res) => {
//     //if the username is not found, we send an error
//     thisUsers = users.filter(users => {
//         return users.username==req.params.username
//     })
//     if(thisUsers.length==0) {
//         res.status(404).send("user not found")
//         return
//     }
//         res.render('profile', {
//             username: req.params.username
//         })
// })


module.exports = router;