import createProductService from "../services/products/createProduct.service";
import listProductsService from "../services/products/listProducts.service";
import showProductService from "../services/products/showProduct.service";
import updateProductService from "../services/products/updateProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";
import showByCategoryProductService from "../services/products/showByCategory.service";

export default class ProductsController {
  async store(request, response) {
    try {
      const productCreated = await createProductService(request.body);

      return response.status(201).json(productCreated);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async index(request, response) {
    try {
      const products = await listProductsService();

      return response.status(200).json(products);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(request, response) {
    try {
      const product = await showProductService(request.params);

      return response.status(200).json(product);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(request, response) {
    try {
      const updatedProduct = await updateProductService(
        request.body,
        request.params
      );

      return response.json(updatedProduct);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async delete(request, response) {
    try {
      const deletedProduct = await deleteProductService(request.params);

      return response.status(200).json(deletedProduct);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async showByCategory(request, response) {
    try {
      const products = await showByCategoryProductService(request.params);

      return response.status(200).json(products);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
