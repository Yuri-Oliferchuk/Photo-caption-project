const passport = require('passport');                            //add pasport
const LocalStrategy = require('passport-local');                 //add pasport-local lirary
const bcrypt = require('bcrypt');                                //add dcrypt
const {findByUsername, findById} = require('./db.js');           //connect file with user object 

//set default pasport LocalStrategy
passport.use(
    new LocalStrategy(function verify(username, password, done) {
        findByUsername(username, async function (err, user) {        
          if (err) return done(err);
          if (!user) return done(null, false, { message: "No user found"});
          password = await bcrypt.hash(password, user.salt);
          if (user.password != password) { 
                      console.log('wrong password')
                      return done(null, false, { message: "Wrong password"}); }
          return done(null, user);
        });
  }));
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    findById(id, function (err, user) {
      if (err) {
        return done(err);
      }
      done(null, user);
    });
  });