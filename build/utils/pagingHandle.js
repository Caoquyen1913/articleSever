"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const paging = async ({
  model,
  page,
  limit,
  query = {},
  selection = {},
  options = {}
}) => {
  const [data, total] = await Promise.all([model.find(query, selection, options).skip(page * limit).limit(+limit), model.countDocuments(query)]);
  const totalPages = Math.ceil(total / +limit);
  return [data, totalPages];
};

var _default = {
  paging
};
exports.default = _default;
//# sourceMappingURL=pagingHandle.js.map