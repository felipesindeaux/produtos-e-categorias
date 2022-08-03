import database from "../../database";

const createCategoryService = async ({ name }) => {
  try {
    const res = await database.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *;",
      [name]
    );

    const [categoryCreated] = res.rows;

    return { message: "Category created", category: categoryCreated };
  } catch (err) {
    throw new Error(err);
  }
};

export default createCategoryService;
