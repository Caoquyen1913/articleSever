const validate = (schema, reqType) => {
  return function (req, res, next) {
    try {
      let result = {};
      switch (reqType) {
        case 'body':
          result = schema.validate(req.body);
          req.body = result.value;
          break;
        case 'params':
          result = schema.validate(req.params);
          break;
        default:
          result = schema.validate(req.query);
          req.query = result.value;
          break;
      }
      if (result.error) {
        const err = new Error(result.error);
        err.statusCode = 400;
        return next(err);
      }

      return next();
    } catch (error) {
      next(error);
    }
  };
};

export default {
    validate
}