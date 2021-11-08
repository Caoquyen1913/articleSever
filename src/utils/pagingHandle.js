const paging = async ({
    model,
    query = {},
    selection = {},
    page, limit,
    options = {}
}) => {
    const [data, total] = await Promise.all([
        model
            .find(
                query, selection, options
            )
            .skip((page - 1) * limit)
            .limit(+limit),
        model.countDocuments(query)
    ]);
    const totalPages = Math.ceil(total / +limit);
    return [data, totalPages];
}
export default { paging };