import database from "../database";

const checkProductExistenceMiddleware = async (request, response, next) => {
  try {
    const { id } = request.params;

    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

    if (!regexExp.test(id)) {
      return response.status(400).json({ message: "Invalid id" });
    }

    const res = await database.query("SELECT * FROM products WHERE id=$1;", [
      id,
    ]);

    if (res.rows.length === 0) {
      return response
        .status(400)
        .json({ message: "Not found any product with this id" });
    }

    next();
  } catch (err) {
    return response.status(500).json(err);
  }
};

export default checkProductExistenceMiddleware;
