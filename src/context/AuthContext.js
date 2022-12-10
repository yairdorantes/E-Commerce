import { createContext, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { vars } from "../components/variables";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authTokenCommerce")
      ? JSON.parse(localStorage.getItem("authTokenCommerce"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokenCommerce")
      ? jwt_decode(localStorage.getItem("authTokenCommerce"))
      : null
  );

  let loginUser = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    helpHttp()
      .post(`${vars.mySite}login`, options)
      .then((res) => {
        console.log(res + "aqui");
        if (res.token) {
          setAuthToken(res.token);
          setUser(jwt_decode(res.token));
          localStorage.setItem("authTokenCommerce", JSON.stringify(res.token));
          console.log("si paso aqui");
          navigate("/home");
        } else {
          console.log(res.token);
          // console.log(res.status);
          alert("ups, algo salio mal");
        }
      });
  };
  let logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authTokenCommerce");
    navigate("/login");
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
