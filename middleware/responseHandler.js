function responseHandler (req, res, next) {
    res.success = (data,message='success') => {
        res.status(200).json({success:true,message,data});
    };

    res.error = (message = 'Somthing went wrong', statusCode = 500) => {
        res.status(statusCode).json({success:false, message});
    }

    next();
}

module.exports = responseHandler;