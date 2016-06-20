const Express = require('express');
//const chalk = require('chalk');

const app = Express();

app.get('*', (req,res) => {
    console.log(req.url);
    res.send('Hello');
})

app.listen(3000,  err => {
    if (err) {
        console.error(err);
    } else {
        console.info(
            `\n\n💂  Listening at http://localhost:3000\n`
        );
    }
});