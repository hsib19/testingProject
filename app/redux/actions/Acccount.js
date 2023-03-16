// import AppService from "../../services/apps";
import * as actionTypes from "../type";

const authRequest = () => (
    {type: actionTypes.AUTH_REQUEST}
);

const authFailed = () => (
    {type: actionTypes.AUTH_FAILED}
);

const authSuccess = (data) => (
    {type: actionTypes.AUTH_SUCCESS, data}
);

export const authData = () => {

    return async dispatch => {

        dispatch(authRequest());

        try {
            const dataAccount = {
                name: "Hasib Muharam"
            }
            dispatch(authSuccess(dataAccount));
        } catch (error) {
            dispatch(authFailed());
        }

    }
}