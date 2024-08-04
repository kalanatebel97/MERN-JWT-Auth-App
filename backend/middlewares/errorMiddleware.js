const notFound = async(req,res,next)=>{

    const error = new Error(`Nor found ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = async (error, req,res,next) =>{ 
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = error.message;

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 404;
        message = 'Resource Not Found!'
    }
    res.status(statusCode).json({
        message,
        stack : process.env.NODE_ENV === "production" ? null : error.stack
    })
}
export {
    notFound,
    errorHandler
}