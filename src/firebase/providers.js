import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    //mandamos a llamar al proveedor que vamos a necesitar
    const result = await signInWithPopup(FireBaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);

    const user = result.user;
    // console.log({credentials})

    const {displayName, email, photoURL, uid} = user;

    return{
        ok:true,
        displayName,email,photoURL,uid
    }
    
  } catch (error) {
    console.log('malooo')
    const errorCode = error.Message;
    return{
        ok:false,
        errorMessage: errorCode
    }
  }
};
