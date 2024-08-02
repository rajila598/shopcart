import ApiManager from "./ApiManager";

export const userLogin = async data => {
    try {
        const res = await ApiManager("/auth/login", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            data: data,
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
};
