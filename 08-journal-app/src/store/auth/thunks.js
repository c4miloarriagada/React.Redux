import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journalSlice"
import { checkingCredentials, logout, login } from "./"


export const checkingAuthentication = (email, password)=> {
    return async( dispatch ) =>{
        dispatch(checkingCredentials())
    }
}


export const startGoogleSignIn = () =>{
    return async( dispatch ) =>{
        dispatch(checkingCredentials())
        const result =  await signInWithGoogle()
        if(!result.ok) return dispatch( logout(result.errorMessage) );

        dispatch( login( result ) )
    }
}


export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {

    return async( dispatch ) =>{
        dispatch(checkingCredentials())
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailAndPassword({ email, password, displayName })
        
        if(!ok) return dispatch( logout({errorMessage}) )

        dispatch(login({uid, displayName, email, photoURL}));
    }
}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch) => {
        dispatch(checkingAuthentication())

       const {ok , uid, photoURL, errorMessage} = await loginWithEmailPassword({email, password})
        
       if(!ok) return dispatch( logout({errorMessage}) )
       
       dispatch(login({uid,email, photoURL  }))

    }
}

export const startLogout = () => {

    return async (dispatch)=>{
       await logoutFirebase();
        dispatch(clearNotesLogout())
       dispatch(logout())
    }

}

