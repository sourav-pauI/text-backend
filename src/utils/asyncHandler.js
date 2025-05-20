
//Prevent crashing due to unhandled promise rejections in routes
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    //Catches async errors and passes to Express
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
