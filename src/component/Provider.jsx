import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './Firebase.init';


export let AuthProvider= createContext(null)










const Provider = ({children}) => {

    let [users,setUsers]=useState(null)

    let [loader,setLoader]= useState(true)

  let handleCreateUser=(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  let handleSignIn=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  let handleSignOut=()=>{
    setLoader(true)
    return signOut(auth)
  }



 useEffect(()=>{
    let unsubscribe= onAuthStateChanged(auth, (CurrentUser) => {
        if (CurrentUser) {
         console.log(CurrentUser)
         setUsers(CurrentUser)
        } else {
          // User is signed out
          // ...
          setUsers(null)
        }
        setLoader(false)
      });

      return()=>{
        unsubscribe();
      }
 },[])

  let data={
    handleCreateUser,
    handleSignIn,
    users,
    handleSignOut,
    loader
  }



    return (
        <AuthProvider.Provider value={data}>
             {children}
        </AuthProvider.Provider>
    );
};

export default Provider;