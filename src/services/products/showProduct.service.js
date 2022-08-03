import database from "../../database";

const showProductService = async ({ id }) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1;", [
      id,
    ]);

    const [product] = res.rows;

    return product;
  } catch (err) {
    throw new Error(err);
  }
};

export default showProductService;
