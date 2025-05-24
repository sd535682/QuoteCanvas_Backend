export const getPaginationParams = (req, defaultLimit = 20) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, parseInt(req.query.limit) || defaultLimit);
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

export const getPaginationMeta = (total, page, limit) => ({
  total,
  page,
  limit,
  totalPages: Math.ceil(total / limit),
  hasNextPage: page * limit < total,
  hasPrevPage: page > 1,
});
