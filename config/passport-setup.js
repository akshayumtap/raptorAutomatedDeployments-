const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const TwitchStrategy = require("passport-twitch.js").Strategy;
const chalk = require('chalk')
const keys = require('./keys')
const User = require('../models/user-model')


///let user = {};


passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

// Google Strategy
passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    },
        (accessToken, refreshToken, profile, cb) => {

            User.findOne({ userid: profile.id }).then((currentUser) => {
                if (currentUser) {
                    console.log("------------User Alredy exist-----------\n" + currentUser)
                    cb(null, currentUser)
                } else {
                    new User({
                        userid: profile.id,
                        username: profile.displayName,
                        thumbnail: profilparamparamparame.photos.value
                    }).save().then((currentUser) => {
                        console.log("-------------New User------------" + currentUser)
                        cb(null, currentUser)
                    })
                }
            })
            //console.log("ghgfsahgfhjgjaddparam"+chalk.blue(JSON.stringify(profile)));
            //user = { ...profile };
            //return cb(null, profile);
        })
)

// Github Strategy
passport.use(new GithubStrategy({
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: "/auth/github/redirect"
},
    (accessToken, refreshToken, util, profile, cb) => {
        User.findOne({ userid: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log("------------User Alredy exist-----------\n" + currentUser)
                cb(null, currentUser)
            } else {
                new User({
                    userid: profile.id,
                    username: profile.displayName,
                    thumbnail: profile.photos.value
                }).save().then((currentUser) => {
                    console.log("-------------New User------------" + currentUser)
                    cb(null, currentUser)
                })
            }
        })


        //Retrieve data from database
        User.find({}).then((u) => {


            console.log("-------------All User-------------")
            console.log(u)
        })

        console.log("----------------------Util--------------------------")
        console.log(chalk.blue(JSON.stringify(util)))
        // console.log(chalk.blueBright(util.access_token))
        // console.log(chalk.blueBright(util.scope))
        // console.log(chalk.blueBright(util.token_type))
        console.log("----------------------Profile--------------------------")
        console.log(chalk.blue(JSON.stringify(profile)))
        // console.log(chalk.blueBright(profile.id))
        // console.log(chalk.blueBright(profile.displayName))
        // console.log(chalk.blueBright(profile.username))
        // console.log(chalk.blueBright(profile.profileUrl))
        // console.log(chalk.blueBright(profile._json.login))
        console.log("----------------------Callback Function--------------------------")
        console.log(chalk.blueBright(cb))
        user = { ...profile };
        console.log("-----------------------User profile-------------------------")
        console.log(user)
        console.log("-----------------------User profile-------------------------")
        //console.log(chalk.red(JSON.stringify(d)))
        return cb(null, profile);
    }));

// Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: "/auth/facebook/redirect"
},
    (accessToken, refreshToken, profile, cb) => {
        User.findOne({ userid: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log("------------User Alredy exist-----------\n" + currentUser)
                cb(null, user)
            } else {
                new User({
                    userid: profile.id,
                    username: profile.displayName
                }).save().then((currentUser) => {
                    console.log("-------------New User------------" + currentUser)
                    cb(null, user)
                })
            }
        })
        // console.log(chalk.blue(JSON.stringify(profile)));
        // console.log(chalk.blueBright(profile.displayName))
        // console.log(chalk.blueBright(profile.username))
        // console.log(chalk.blueBright(profile.profileUrl))
        user = { ...profile };
        return cb(null, profile);
    }));

// Amazon Strategy

// Spotify Strategy
passport.use(new SpotifyStrategy({
    clientID: keys.spotify.clientID,
    clientSecret: keys.spotify.clientSecret,
    callbackURL: "/auth/spotify/redirect"
},
    (accessToken, refreshToken, profile, cb) => {
        User.findOne({ userid: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log("------------User Alredy exist-----------\n" + currentUser)
                cb(null, user)
            } else {
                new User({
                    userid: profile.id,
                    username: profile.displayName,
                    thumbnail: profile.profileUrl
                }).save().then((currentUser) => {
                    console.log("-------------New User------------\n" + currentUser)
                    cb(null, user)
                })
            }
        })
        user = { ...profile };
        console.log("-------------User Data------------\n" + JSON.stringify(profile))
        return cb(null, profile);
    }));

// Twitch Strategy
passport.use(new TwitchStrategy({
    clientID: keys.twitch.clientID,
    clientSecret: keys.twitch.clientSecret,
    callbackURL: "/auth/twitch/redirect"
},
    (accessToken, refreshToken, profile, cb) => {
        User.findOne({ userid: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log("------------User Alredy exist-----------\n" + currentUser)
                cb(null, user)
            } else {
                new User({
                    userid: profile.id,
                    username: profile.display_Name,
                    thumbnail: profile.profile_image_url
                }).save().then((currentUser) => {
                    console.log("-------------New User------------" + currentUser)
                    cb(null, user)
                })
            }
        })
        user = { ...profile };
        console.log("-------------New User------------\n" + JSON.stringify(profile))
        return cb(null, profile);
    }));

