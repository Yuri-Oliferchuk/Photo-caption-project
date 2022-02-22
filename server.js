require('./config/passport.js');                         
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');                     
const passport = require('passport');                         
const flash = require('express-flash')
const {interface} = require('./routers/interface.js')
const {api} = require('./routers/api.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');                           
app.use(express.static(__dirname+'/public'));

// add body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//session config
app.use(flash())
app.use(session({
    name: process.env.SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SECRET,
    cookie: {
      maxAge: 1000*60*60*2,
      sameSite: true,
      secure: false,
    }
}))
  
// Passport Config
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'));

app.use('/', interface)
app.use('/api', api)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
})