const templatesDB = {
    templates: require('../data/templates.json'),
    setTemplates: function (templates) {
        this.templates = templates;
    }
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const { te } = require('date-fns/locale');

const templateAdition = async (req, res) => {
    const { name, text, slug } = req.body;
    if( !name || !text || !slug ) {
        res.status(400).json({ 'message': 'Bad request' });
        return;
    }
    //check for duplicate slug
    const duplicateSlug = templatesDB.templates.find(template => template.slug === slug);
    if( duplicateSlug) return res.status(409);//conflict
    try {
        const template = {
            "name": name,
            "text": text,
            "slug": slug
        }
        templatesDB.setTemplates([...templatesDB.templates, template]);
        await fsPromises.writeFile(path.join
            (__dirname, '..', 'data', 'templates.json'),
            JSON.stringify(templatesDB.templates)
        );
        console.log(templatesDB.templates);
        res.status(200).json({ 'message': `new template ${name} added` });
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

module.exports = { templateAdition}

