import database from "../database";

const checkUniqueNameMiddleware = async (request, response, next) => {
  const { name } = request.body;

  try {
    const res = await database.query(
      "SELECT * FROM categories WHERE name = $1",
      [name]
    );

    if (res.rows.length > 0) {
      return response.status(400).json({ message: "Name is already in use" });
    }

    next();
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

export default checkUniqueNameMiddleware;
