import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const checkUserRoll = async (userEmail) => {
      try {
        setLoading(false);
        const response = await axios.get(
          `https://house-hunter-server-mdarefineahamedjoy.vercel.app/users/${userEmail}`
        );
        setCurrentUser(response?.data?.selectedRole);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    checkUserRoll(userEmail);
  }, [userEmail]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  const authInfo = { currentUser, userEmail };
  return (
    <AuthContext.Provider value={{ ...authInfo, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
