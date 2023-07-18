const sendError = (req, res) => {
    console.log("Error 404: Page not found")    
    res.status(404).render('404')
    return
}
module.exports = sendError;