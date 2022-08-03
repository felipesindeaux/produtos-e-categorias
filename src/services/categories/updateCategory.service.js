import database from "../../database";

const updateCategoryService = async ({ name }, { id }) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name=$1 WHERE id=$2 RETURNING *;",
      [name, id]
    );

    const [categoryUpdated] = res.rows;

    return {
      message: "Category updated",
      category: categoryUpdated,
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;
