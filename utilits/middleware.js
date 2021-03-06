//function for redirect if user not loged in
const redirectLogin = (req, res, next) => {
    if(!req.user) {
        res.redirect('/login');
    } else {
        next();
    }
}
  
//function for redirect if user authorized
const redirectHome = (req, res, next) => {
    if(req.isAuthenticated()) {
        res.redirect('/');
    } else {
        next();
    }
}

module.exports = {
    redirectLogin,
    redirectHome
}