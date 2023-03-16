import * as actionTypes from "../type";
import AppService from "../../service/AppService";


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

            const res = await AppService.get('account');
            dispatch(authSuccess(res));
        } catch (error) {
            dispatch(authFailed());
        }

    }
}