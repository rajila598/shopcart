import { LOGIN } from "../../config/urls";
import { apiPost, setUserData } from "../../utils/utils";
import store from "../store";
import types from "../types";

const { dispatch } = store;

const saveUserData = (data) => {
    dispatch({
        type: types.LOGIN,
        payload: data,
    })
}
export function login(data) {
    return new Promise((resolve, reject) => {

        return apiPost(LOGIN, data)
            .then((res) => {
                setUserData(res)
                    .then(() => {

                        saveUserData(res);
                        resolve(res);
                    }).catch((error) => {
                        reject(error);
                    })
            }).catch((error) => {
                reject(error);
            })
    })

}


const clearUserData = () => {
    dispatch({
        type: types.LOGOUT,
    });
};

export function logout() {
    return new Promise((resolve, reject) => {
        try {
            // Perform any necessary logout operations here
            // For example, clearing user data from AsyncStorage
            // AsyncStorage.removeItem('userData').then(() => {
            //     clearUserData();
            //     resolve();
            // }).catch((error) => reject(error));

            // Example without AsyncStorage for simplicity
            clearUserData();
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}