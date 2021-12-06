"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeCron = _interopRequireDefault(require("node-cron"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cronJob = (time, job) => {
  _nodeCron.default.schedule(time, job, {
    scheduled: true,
    timezone: 'Asia/Singapore'
  });
};

var _default = {
  cronJob
};
exports.default = _default;
//# sourceMappingURL=cronJob.js.map