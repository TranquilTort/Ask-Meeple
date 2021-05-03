function loginUser(req,res,user){
    req.session.auth = {
        userId:user.id,
    };
};

function logoutUser(req,res){
    delete req.session.auth;
};

module.exports={loginUser,logoutUser};
