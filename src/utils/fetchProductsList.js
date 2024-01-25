import axios from "axios";
import axiosConf from "./axiosConf";


export const getAllProducts = async (page = 0) => {

    try {

       /*  const response = await axiosConf.get(`public/products?page=${page}`); */
         const response = await axios.get(`https://6274471f3d2b5100742a5877.mockapi.io/prueba`);
        return response.data;

    } catch (error) {
        console.error("Error al obtener productos:", error);
        return error;
    }

}

export const getProduct = async (id) => {

    try {

        const response = await axiosConf.get(`public/products/${id}`);
        return response.data;

    } catch (error) {
        return error;
    }

}

export const getProductByQuery = async (page = 0, query) => {

    try {

        const response = await axiosConf.get(`public/product?page=${page}&q=${query}`);
        return response.data;

    } catch (error) {
        return error;
    }

}

export const getProductsFilter = async (subCategory, page = 0) => {

    try {

         const response = await axiosConf.get(`public/products/subCategory?page=${page}&subcategory=${subCategory}`); 
        return response.data;
   

    } catch (error) {
        return error;
    }

}

export const getProductByCategory = async (category, page = 0) => {

    try {

        const response = await axiosConf.get(`public/products/categories/${category}?page=${page}`);
        return response.data;

    } catch (error) {
        return error;
    }

}

export const getCategory = async () => {

    try {

        const response = await axiosConf.get(`public/get/category`);

        return response.data;

    } catch (error) {
        return error;
    }

}

/* Requests Admin */


export const deleteProduct = async (id) => {

    try {

        const response = await axiosConf.delete(`admin/products/${id}`);
        return response.data;

    } catch (error) {
        return error;
    }

}

export const addProduct = async (product) => {

    try {

        const response = await axiosConf.post(`admin/products`, product);
        return response.data;

    } catch (error) {
        return error;
    }

}

export const updateProduct = async ( updatedProductData) => {
    try {
        const response = await axiosConf.put(`admin/products`, updatedProductData);
        return response;
    } catch (error) {
        return error;
    }
};