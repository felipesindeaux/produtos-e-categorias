import database from "../../database";

const showByCategoryProductService = async ({ category_id }) => {
  try {
    const res = await database.query(
      "SELECT p.name, p.price, c.name AS category FROM categories c INNER JOIN products p ON c.id = p.category_id WHERE p.category_id=$1;",
      [category_id]
    );

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default showByCategoryProductService;
