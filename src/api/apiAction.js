import config from "../config/config";
import { cFetch, token } from "./api_utils";

export async function getCategoriesData() {
  return cFetch(`${config.API_URL}/categories`, {
    method: "GET",
  });
}
export async function getProductDetails(category_id, limit, page) {
  return cFetch(
    `${config.API_URL}/products/category/${category_id}?limit=${limit}&page=${page}`,
    {
      method: "GET",
    }
  );
}
