const Template = require('../data/Template');
const bcrypt = require('bcrypt');
const { te } = require('date-fns/locale');

const templateAdition = async (req, res) => {
    const { name, text, slug } = req.body;
    if( !name || !text || !slug ) {
        res.status(400).json({ 'message': 'Bad request' });
        return;
    }
    //check for duplicate slug with using mongoDB
    const duplicateSlug = await Template.findOne({ slug: slug }).exec();
    if (duplicateSlug) return res.sendStatus(409); //Conflict 
    try {
        const result = await Template.create({
            name: name,
            text: text,
            slug: slug
        });

        res.status(201).json(result);
    } catch (error) {
        console.error(err);
    }
}

module.exports = { templateAdition}

