const db = require('./db/models')

function loginUser(req,res,user){

    req.session.auth = {
        userId:user.id,
    };
    console.log('inside loginUser', req.session.auth);
    // restoreUser(req, res, next);
};

function logoutUser(req,res){
    delete req.session.auth;
};
const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
      return res.redirect('/users/sign-in');
    }
    return next();
  };

const restoreUser = async (req, res, next) => {
    // Log the session object to the console
    // to assist with debugging.
    console.log('req.session', req.session);
    console.log('req.session.auth', req.session.auth)

    if (req.session.auth) {
      const { userId } = req.session.auth;

      try {
        const user = await db.User.findByPk(userId);

        if (user) {
          res.locals.authenticated = true;
          res.locals.user = user;
          next();
        }
      } catch (err) {
        res.locals.authenticated = false;
        next(err);
      }
    } else {
      res.locals.authenticated = false;
      next();
    }
  };

module.exports={loginUser,requireAuth,logoutUser, restoreUser};
