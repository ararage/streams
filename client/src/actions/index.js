import { SIGN_IN, SIGN_OUT } from "../actions/types";

//Pass the type of action and the user Id to the Reducer

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};