import "./styles/formStyles.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { helpHttp } from "../helpers/helpHttp";
import eyes from "../media/eye2.png";
import closeye from "../media/eyeclose.png";
// import env from "react-dotenv";
import { vars } from "./variables";
let url = `${vars.mySite}signup`;
const initialForm = {
  name: "",
  mail: "",
  password: "",
  lastname: "",
};
const SignUp = () => {
  // let { loginUser, logoutUser, loginAfterSignUp } = useContext(AuthContext);
  const [eye, setEye] = useState(false);

  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);

  const createData = (data) => {
    console.log(data);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    helpHttp()
      .post(url, options)
      .then((res) => {
        console.log(res);
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.mail || !form.password) {
      alert("Por favor llena todos los datos");
      return;
    } else {
      if (form.name.length > 14) {
        alert("Elige un nombre menor a 14 caracteres");
        return;
      }
      // navigate("/home");
    }
    createData(form);

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  const toggleEye = () => {
    eye ? setEye(false) : setEye(true);
  };

  return (
    <>
      <div className="login-form">
        <div className="login-container">
          <form className="form">
            <input
              onChange={handleChange}
              className="parrafo"
              name="name"
              placeholder="Nombre de usuario"
              type="text"
              value={form.name}
            />
            <input
              onChange={handleChange}
              className="parrafo"
              name="lastname"
              placeholder="lastname"
              type="text"
              value={form.lastname}
            />
            <input
              onChange={handleChange}
              className="parrafo"
              name="mail"
              type="mail"
              placeholder="mail"
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
              <span className="eye eye-create">
                <img
                  className="eye-icon"
                  onClick={toggleEye}
                  src={eye ? eyes : closeye}
                  alt=""
                />
              </span>
            )}
            <div className="btn-register">
              <button onClick={handleSubmit} type="submit">
                Registrar
              </button>
              <Link
                style={{ color: "rgb(0, 218, 153)", textDecoration: "none" }}
                className="link-to-signup"
                to={"/login"}
              >
                <div>- Login -</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
