import axiosConf from "./axiosConf";


export const getAllProducts = async (page = 0) => {

    try {

        const response = await axiosConf.get(`public/products?page=${page}`);
        return response.data;

    } catch (error) {
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



export const findProductsSubCategory = async (subCategory, page = 0) => {

    try {

        const response = await axiosConf.get(`public/products/subCategory?page=${page}&subcategory=${subCategory}`);

        return response.data;

    } catch (error) {
        return error;
    }

}

export const findProductsByBrand = async (brand, page = 0) => {

    try {

        const response = await axiosConf.get(`public/products/brand?page=${page}&brand=${brand}`);

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
       return response.data.msg; 

    } catch (error) {
        return error;
    }

}

export const updateProduct = async (updatedProductData) => {
    try {

        const response = await axiosConf.put(`admin/products`, updatedProductData);
        return response;

    } catch (error) {
        return error;
    }
};


export const postSubCategory = async (subCategory) => {
    try {

        const response = await axiosConf.post("admin/create/subcategory", subCategory);
        return response;

    } catch (error) {
        return error;
    }
}


export const getSubcategory = async () => {

    try {
        const response = await axiosConf.get(`public/get/subCategories`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getBrand = async () => {

    try {

        const response = await axiosConf.get(`public/brand/get`);
        return response.data;

    } catch (error) {
        return error;
    }

};

export const postBrand = async (formData) => {

    try {
        
        const response = await axiosConf.post("admin/brand/create", formData);

        return response;

    } catch (error) {
        return error;
    }
}

export const modifyTitle = async (data) => {

    try {

        const responnse = await axiosConf.put("admin/brand/put", data[0])
        return responnse; 
        
    } catch (error) {
        
        return error;
    }

}

export const deleteBrands = async (id) => {

    try {
        
        const response = await axiosConf.delete(`admin/brand/deleteById?id=${id.id}`);

        return response;

    } catch (error) {
        return error;
    }
}