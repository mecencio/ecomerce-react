import { arr_prod } from "./products";

export const brands = [...new Set(arr_prod.map(item => item.brand))];