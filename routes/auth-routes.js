const express = require("express");
const router = express.Router();
const passport = require("passport");
//auth login

router.get("/login", (req, res) => {
  res.render("login");
});

//auth logout

router.get("/logout", (req, res) => {
   req.logout();
   res.redirect('/');
});

//auth with google
//passport.authenticate gives us the google screen
router.get("/google", passport.authenticate("google", {
    scope: ['profile']
}));

//callback route for google redirect
//passport.authenticte contains the code which we get on redirection
router.get('/google/redirect',passport.authenticate('google'), (req, res)=>{
   // res.send(req.user);
    //res.send("You reached the callback URI");
    res.redirect('/profile')
})


module.exports = router;
