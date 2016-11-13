import express from 'express';
import mailer from 'express-mailer'; 
import webpack from 'webpack'; 
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
const app = express();
let compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}));

app.use(hotMiddleware(compiler));

const port = process.env.PORT || 8000;

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
app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");

});
app.post('*', (req, res) => {
    res.send("good");

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

});*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});