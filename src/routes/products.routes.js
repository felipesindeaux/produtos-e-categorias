import { Router } from "express";
import ProductsController from "../controllers/products.controller";
import checkCategoryExistenceMiddleware from "../middlewares/checkCategoryExistence.middleware";
import checkProductExistenceMiddleware from "../middlewares/checkProductExistence.middleware";

const router = Router();
const productsController = new ProductsController();

router.post("/", checkCategoryExistenceMiddleware, productsController.store);

router.get("/", productsController.index);

router.get("/:id", checkProductExistenceMiddleware, productsController.show);

router.patch(
  "/:id",
  checkProductExistenceMiddleware,
  productsController.update
);

router.delete(
  "/:id",
  checkProductExistenceMiddleware,
  productsController.delete
);

router.get(
  "/category/:category_id",
  checkCategoryExistenceMiddleware,
  productsController.showByCategory
);

export default router;
