import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export default function AuthProvider({ children }) {
  const [authInfo, setAuthInfo] = useState(null);
  const registerWithEmailAndPassword = async (email, password, userInfo) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res)
      const user = res.user;

      await updateProfile(user, {
        displayName: userInfo.name,
        photoURL: userInfo.photo,
      });

      return auth.currentUser;
    } catch (error) {
      console.log(error);
    }
  };

  // login
  const loginWithEmailAndPassword = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      setAuthInfo({
        name: res.user.displayName,
        photo: res.user.photoURL,
        email: res.user.email,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      return await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  const state = {
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    authInfo,
    logout,
  };

  // listen to firebase auth state
    useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.displayName) {
        setAuthInfo({
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
        });
      } else {
        setAuthInfo(null); // clears after logout
      }
    });

    return () => unsubscribe(); // cleanup
  }, []);
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
