export const API_BASE_URL = "https://dummyjson.com/"

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('auth/login')
export const PRODUCTS = getApiUrl('products/category')