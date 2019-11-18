import { Router, Request, Response } from 'express'
import {join} from 'path';
const passport=require('passport');
const appRouter: Router = Router()
const passdata=require('../config/passport-setup');

appRouter.get('/', (req: Request, res: Response, next) => {
  res.render(join(__dirname,"../client/login"))
})

const User = require('../models/user-model')

//Google routes
appRouter.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));
appRouter.get("/auth/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/google_home?data="+JSON.stringify(req.param));
  });
appRouter.get('/google_home', (req, res) => {
  console.log("gggggggggggg")
  res.render(join(__dirname, "../client/index"));

})

//Github routes
appRouter.get("/auth/github", passport.authenticate("github", {
  scope: ['profile', 'user', 'repo']
}));
appRouter.get("/auth/github/redirect",
  passport.authenticate("github"),
  (req, res) => {
    res.redirect('/github_home')
  });
appRouter.get('/github_home', (req, res) => {
  res.render(join(__dirname, "../client/index"));
})

//Facebook routes
appRouter.get("/auth/facebook", passport.authenticate("facebook", {
  scope: 'public_profile,email'
}));
appRouter.get("/auth/facebook/redirect/",
  passport.authenticate("facebook"),
  (req, res) => {
    res.redirect('/facebook_home')
  });
appRouter.get('/facebook_home', (req, res) => {
  res.render(join(__dirname, "../client/index"));
})

// router.get("/auth/amazon", passport.authenticate("amazon", {
//     scope: ["profile"]
// }));
// router.get("/auth/amazon/callback",
//     passport.authenticate("amazon"),
//     (req, res) => {
//         res.redirect("/profile");
//     });

// router.get("/auth/instagram", passport.authenticate("instagram"));
// router.get("/auth/instagram/callback",
//     passport.authenticate("instagram"),
//         (req, res) => {
//             res.redirect("/profile");
//         });

//Spotify routes
appRouter.get("/auth/spotify", passport.authenticate("spotify"));
appRouter.get("/auth/spotify/redirect",
  passport.authenticate("spotify"),
  (req, res) => {
    res.redirect("/spotify_home");

  });
appRouter.get('/spotify_home', (req, res) => {
  res.render(join(__dirname, "../client/index"),{});
})

//Twitch routes
appRouter.get("/auth/twitch", passport.authenticate("twitch.js"));
appRouter.get("/auth/twitch/redirect",
  passport.authenticate("twitch.js"),
  (req, res) => {
    res.redirect("/twitch_home");
  });
appRouter.get('/twitch_home', (req, res) => {
  res.render(join(__dirname, "../client/index"), {});
})


export { appRouter } 