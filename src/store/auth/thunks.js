
import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = (email,Password)=>{
    return async (dispatch)=>{
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = ()=>{
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        const results = await singInWithGoogle();
     
        if(!results.ok) return dispatch(logout(results.errorMessage));
        dispatch(login(results))
    }
}