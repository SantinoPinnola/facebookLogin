import passport from 'passport';
import { UserModel } from '../models/userModels';
import Config from '../config/index';
import {
  VerifyFunction,
  StrategyOption,
  Strategy as FaceBookStrategy,
} from 'passport-facebook';
import { Request, Response, NextFunction } from 'express';





const strategyOptions: StrategyOption = {
  clientID: Config.FACEBOOK_APP_ID,
  clientSecret: Config.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:8080/api/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails'],
};

const loginFunc: VerifyFunction = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  console.log('SALIO TODO BIEN');
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
  return done(null, profile);
};

passport.use(new FaceBookStrategy(strategyOptions, loginFunc));




//passport.use('signup', new LocalStrategy(localStrategyOptions, signupFunction));


export const isLoggedIn = (req : Request, res : Response, done: (arg0: null, arg1: any) => void) => {
    if (!req.user) return res.status(401).json({ msg: 'Unathorized' });
  
    done(null, req.user);
};

interface User {
    _id? : String
}
  
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj: string, cb) {
  cb(null, obj);
});


export default passport;