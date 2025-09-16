import { useContext, useState } from "react";
import { AuthContext } from "../context";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function AuthProvider({ children }) {
    const [authInfo, setAuthInfo] = useState(null);
    


  const registerWithEmailAndPassword = async (email, password, userInfo) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
     
      await updateProfile(user, {
        displayName: userInfo.name,
        photoURL: userInfo.photo,

      })

      return auth.currentUser;
    } catch (error) {
      console.log(error);
    }
  };

  // login
  const loginWithEmailAndPassword = async(email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
        setAuthInfo({
            name: res.user.displayName,
            photo: res.user.photoURL,
            email: res.user.email,

        })
        return res;
        
    } catch (error) {
        console.log(error)
    }
  }
  const state = {
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    authInfo,

  };
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
