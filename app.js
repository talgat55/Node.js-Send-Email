import express from 'express';
import mailer from 'express-mailer';
import path from 'path';
/*import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js';
*/

let app = express();
/*const COMPILER = webpack(config);
app.use(webpackMiddleware(COMPILER));
*/ 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.use(express.static(path.join(__dirname, 'public')));

let port = process.env.PORT || 3000;

mailer.extend(app, {
    from: 'info@arjunphp.com',
    host: 'smtp.gmail.com',
    secureConnection: true, // use SSL
    port: 465,
    transportMethod: 'SMTP',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourPassword'
    }
});
/*
app.get('/', (req, res) => {
    var mailOptions = {
        to: 'arjunphp@gmail.com',
        subject: 'Email from SMTP sever',
        user: { // data to view template, you can access as - user.name
            name: 'Arjun PHP',
            message: 'Welcome to arjunphp.com'
        }
    }

    // Send email.
    app.mailer.send('email', mailOptions, (err, message) => {
        if (err) {
            console.log(err);
            res.send('There was an error sending the email');
            return;
        }
        return res.send('Email has been sent!');
    });

});
*/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});