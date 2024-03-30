const exp = require('express');
var cors = require('cors');

const app = exp();

app.use(cors());
app.use(exp.json());

app.use('/form', require('./restAPI/dynamic_form_router'));

let port = 3200;
const server = app.listen(port, () => {
    console.log(`Server running at ${port}`)
});

module.exports = app