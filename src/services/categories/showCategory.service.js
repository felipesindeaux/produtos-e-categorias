import database from "../../database";

const showCategoryService = async ({ id }) => {
  try {
    const res = await database.query(
      "SELECT * FROM categories WHERE id = $1;",
      [id]
    );

    const [category] = res.rows;

    return category;
  } catch (err) {
    throw new Error(err);
  }
};

export default showCategoryService;
