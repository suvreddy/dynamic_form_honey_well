const formRouter = require('express').Router();
const fileSystem = require('fs')

formRouter.get('/getForm', (req, res) => {
  fileSystem.readFile('./form_details.txt', 'utf8', (err, formData) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('hello', formData);
    return res.status(200).json({
      data:JSON.parse(formData)
    })
  });
})

module.exports = formRouter;