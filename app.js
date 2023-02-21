const express = require('express');
const app = express();
const cookieSession = require('cookie-session');

const profileRoutes = require('./routes/profile-routes');

const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys')
const mongoose= require('mongoose');
const passport = require('passport');
//auth routes
mongoose.connect(keys.mongodb.dbURI, ()=>{
    console.log("database coonected");
})

app.set('view engine', 'ejs');
app.use(cookieSession({
    maxAge: 24*60*60*1000, 
    keys: [keys.session.cookieKey]
}))

//initialsize [assport]

app.use(passport.initialize());
app.use(passport.session())



app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

//create home route

app.get('/', (req, res)=>{
    res.render('home');
})



app.listen(8080, ()=>{
    console.log("server running successfully")
})