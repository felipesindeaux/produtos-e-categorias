import { Router } from "express";
import CategoriesController from "../controllers/categories.controller";
import checkCategoryExistenceMiddleware from "../middlewares/checkCategoryExistence.middleware";
import checkUniqueNameMiddleware from "../middlewares/checkUniqueName.middleware";

const router = Router();
const categoriesController = new CategoriesController();

router.post("/", checkUniqueNameMiddleware, categoriesController.store);

router.get("/", categoriesController.index);

router.get("/:id", checkCategoryExistenceMiddleware, categoriesController.show);

router.patch(
  "/:id",
  checkCategoryExistenceMiddleware,
  categoriesController.update
);

router.delete(
  "/:id",
  checkCategoryExistenceMiddleware,
  categoriesController.delete
);

export default router;
