const db = require('./db/models')

function loginUser(req,res,user){

    req.session.auth = {
        userId:user.id,
    };
    // restoreUser(req, res, next);
};

function logoutUser(req,res){
    delete req.session.auth;
    res.locals.authenticated = false;
};
const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
      return res.redirect('/users/sign-in');
    }else{
      return next();
    }
  };

const restoreUser = async (req, res, next) => {
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
