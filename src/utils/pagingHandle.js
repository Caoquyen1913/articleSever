const paging = async ({
  model,
  page, limit,
  query = {},
  selection = {},
  options = {},
}) => {
  const [data, total] = await Promise.all([
    model
      .find(
        query,
        selection,
        options,
      )
      .skip((page) * limit)
      .limit(+limit),
    model.countDocuments(query),
  ]);
  const totalPages = Math.ceil(total / +limit);
  return [data, totalPages];
};

export default { paging };