import database from "../database";

const checkCategoryExistenceMiddleware = async (request, response, next) => {
  try {
    const { category_id } = request.body;
    const paramsCategoryId = request.params.category_id;
    const { id } = request.params;

    const checkedId = id
      ? Number(id)
      : paramsCategoryId
      ? Number(paramsCategoryId)
      : category_id;

    if (!checkedId) {
      return response.status(400).json({ message: "Invalid id" });
    }

    const res = await database.query("SELECT * FROM categories WHERE id=$1;", [
      checkedId,
    ]);

    if (res.rows.length === 0) {
      return response
        .status(400)
        .json({ message: "Not found any category with this id" });
    }

    next();
  } catch (err) {
    return response.status(500).json(err);
  }
};

export default checkCategoryExistenceMiddleware;
