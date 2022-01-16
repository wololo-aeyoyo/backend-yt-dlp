const    
    express = require('express'),
    path = require('path'),
    helmet = require("helmet");


const 
    root = require('./core/resources/root/rootRouter');




const app = express();
app.disable('x-powered-by');


//middleware
app.use(helmet());
app.use(express.json({ limit: '2MB' }));
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'pug');



//endpoints
app.use('/', root);


module.exports = app;


