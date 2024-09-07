require('dotenv').config()

const Path    = require('path');
const Express = require('express');
const favicon = require('serve-favicon');

const app = Express();
const port = 8000;

app.use(Express.static(Path.join(__dirname, 'public')));
app.use(favicon(Path.join(__dirname, 'public', 'favicon.png')))
app.use(Express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', Path.join(__dirname, 'views'));

const SERVICE_TENANT      = process.env.SERVICE_TENANT || 'aws';
const SERVICE_ENVIRONMENT = process.env.SERVICE_ENVIRONMENT || 'default';
const SERVICE_NAME        = process.env.SERVICE_NAME || 'default';
const SERVICE_VERSION     = process.env.SERVICE_VERSION || 'default';
const SERVICE_URL         = process.env.SERVICE_URL || 'default';

app.get('*', (req, res) => {
    res.render('index', {
        SERVICE_TENANT: SERVICE_TENANT,
        SERVICE_ENVIRONMENT: SERVICE_ENVIRONMENT,
        SERVICE_NAME: SERVICE_NAME,
        SERVICE_VERSION: SERVICE_VERSION,
        SERVICE_URL: SERVICE_URL
    });
});

const server = app.listen(port, () => {
    console.log(`Demo app listening on port ${port}`);
});

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

function shutdown() {
    console.log('SIGINT signal received: closing HTTP server ...');

    server.close(() => {
        console.log('HTTP server closed!');

        setTimeout(() => {
            process.exit(0);
        }, 3000);
    });
}
