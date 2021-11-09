"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cronJob = void 0;

var _nodeCron = _interopRequireDefault(require("node-cron"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cronJob = (time, job) => {
  _nodeCron.default.schedule(time, job, {
    scheduled: true,
    timezone: 'Asia/Singapore'
  });
};

exports.cronJob = cronJob;
//# sourceMappingURL=cronJob.js.map