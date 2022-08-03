import database from "../../database";

const deleteProductService = async ({ id }) => {
  try {
    const res = await database.query(
      "DELETE FROM products WHERE id=$1 RETURNING *;",
      [id]
    );

    const [deletedProduct] = res.rows;

    return {
      message: "Product deleted",
      product: deletedProduct,
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductService;
