import listCategoriesService from "../services/categories/listCategories.service";
import createCategoryService from "../services/categories/createCategory.service";
import showCategoryService from "../services/categories/showCategory.service";
import updateCategoryService from "../services/categories/updateCategory.service";
import deleteCategoryService from "../services/categories/deleteCategory.service";

export default class CategoriesController {
  async store(request, response) {
    try {
      const categoryCreated = await createCategoryService(request.body);

      return response.status(201).json(categoryCreated);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async index(request, response) {
    try {
      const categories = await listCategoriesService();

      return response.status(200).json(categories);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(request, response) {
    try {
      const category = await showCategoryService(request.params);

      return response.status(200).json(category);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(request, response) {
    try {
      const updatedCategory = await updateCategoryService(
        request.body,
        request.params
      );

      return response.json(updatedCategory);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async delete(request, response) {
    try {
      const deletedCategory = await deleteCategoryService(request.params);

      return response.status(200).json(deletedCategory);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
