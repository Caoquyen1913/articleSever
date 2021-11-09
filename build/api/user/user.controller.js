"use strict";

var _user = _interopRequireDefault(require("./user.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const saltRounds = 10;

const signin = async (req, res, next) => {
  try {
    const {
      name,
      username,
      password
    } = req.body;
    const hashPassword = await _bcrypt.default.hash(password, saltRounds);
    const user = await _user.default.create({
      name,
      username,
      password: hashPassword,
      isActive: true
    });
    res.json({
      data: user
    });
  } catch (error) {
    return next(error);
  }
};
//# sourceMappingURL=user.controller.js.map