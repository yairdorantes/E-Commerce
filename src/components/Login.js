import "./styles/formStyles.css";
import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import eyes from "../media/eye2.png";
import closeye from "../media/eyeclose.png";

const initialForm = {
  mail: "",

  password: "",
};
const Login = () => {
  let { loginUser } = useContext(AuthContext);
  const [eye, setEye] = useState(false);

  const [form, setForm] = useState(initialForm);
  //const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  const toggleEye = () => {
    eye ? setEye(false) : setEye(true);
  };
  const sendRequest = (e) => {
    e.preventDefault();
    loginUser(form);
  };

  return (
    <>
      <div className="login-form">
        <div className="login-container">
          <form className="form">
            <input
              onChange={handleChange}
              className="parrafo"
              name="mail"
              type=""
              placeholder="usuario"
              value={form.mail}
            />
            <input
              onChange={handleChange}
              className="parrafo"
              name="password"
              placeholder="Password"
              type={eye ? "text" : "password"}
              value={form.password}
            />
            {form.password !== "" && (
              <span className="eye">
                <img
                  className="eye-icon"
                  onClick={toggleEye}
                  // src={eye ? eyes : closeye}
                  alt=""
                />
              </span>
            )}
            {/* <input type="password" /> */}
            <div className="btn-register">
              <button onClick={sendRequest}>
                <strong>Ingresar</strong>
              </button>
              <Link
                style={{ color: "rgb(0, 218, 153)", textDecoration: "none" }}
                className="link-to-signup"
                to={"/signup"}
              >
                <div>- Crea una cuenta -</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
