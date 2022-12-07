import { arr_prod } from "./products";

export const categories = [...new Set(arr_prod.map(item => item.category))];