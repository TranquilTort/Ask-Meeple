const db = require('./db/models')

function loginUser(req,res,user){

    req.session.auth = {
        userId:user.id,
    };
    console.log('inside loginUser', req.session.auth);
    // restoreUser(req, res, next);
};

function logoutUser(req,res){
   console.log('req.session.auth');
    console.log(req.session.auth);
    delete req.session.auth;
    console.log('deleted');
    res.locals.authenticated = false;
    console.log(req.session.auth);
};
const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
      return res.save(res.redirect('/users/sign-in'));
    }else{
      return next();
    }

  };

const restoreUser = async (req, res, next) => {
    // Log the session object to the console
    // to assist with debugging.
    console.log('inside restoreUser: req.session', req.session);

    if (req.session.auth) {
      const { userId } = req.session.auth;

      try {
        const user = await db.User.findByPk(userId);
        // console.log('user', user);

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
