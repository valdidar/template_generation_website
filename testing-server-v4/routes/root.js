const { time } = require('console');
const { te } = require('date-fns/locale');
const express = require('express');
const Template = require('../data/Template');
const sendError = require('../middleware/error');
const router = express.Router()

// here we can browse all the templates
router.get('^/$|/use-template?', async (req, res) => {
    const templatesExtra = await Template.find().exec();
    // add only name and slug to templates
    const templates = templatesExtra.map((template) => {
        return {
            name: template.name,
            slug: template.slug,
            createdAt: template.createdAt,
            updatedAt: template.updatedAt
        }
    })
    // console.log(templates);
    res.render('home', {
        templates: templates
    })
})

router.get('/use-template/:slug', async (req, res) => {
    const slug = req.params.slug;
    console.log(slug);
    try {
      const myTemplate = await Template.findOne({ slug }).exec();
      if (!myTemplate) {
        return res.sendStatus(404); // Not found
      }
      // makes preText from text to preserve the formatting
      console.log(myTemplate);
      
      res.render('use-template', {
        name: myTemplate.name,
        text: myTemplate.text,
        slug: myTemplate.slug
      });
    } catch (error) {
      console.error(error);
      // handle the error appropriately
      res.sendStatus(500); // Internal Server Error
    }
  });
  router.get('/edit-template/:slug', async (req, res) => {
    const slug = req.params.slug;
    console.log(slug);
    try {
      const myTemplate = await Template.findOne({ slug }).exec();
      if (!myTemplate) {
        return res.sendStatus(404); // Not found
      }
      // makes preText from text to preserve the formatting
      console.log(myTemplate);
      res.render('edit-template', {
        name: myTemplate.name,
        text: myTemplate.text,
        slug: myTemplate.slug
      });
    } catch (error) {
      console.error(error);
      // handle the error appropriately
      res.sendStatus(500); // Internal Server Error
    }
  });
module.exports = router;