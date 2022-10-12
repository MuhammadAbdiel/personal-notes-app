import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import useInput from "../hooks/useInput";
import useLanguage from "../hooks/useLanguage";
import { getUserLogged, login, putAccessToken } from "../utils/network-data";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const navigate = useNavigate();
  const textApp = useLanguage("app");
  const textLogin = useLanguage("login");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. Login
    // 2. Simpan Access Token
    // 3. Ambil data user yang sedang login
    const fetchData = async () => {
      const startLogin = await login({ email, password });
      try {
        if (!startLogin.error) {
          putAccessToken(startLogin.data.accessToken);
          const user = await getUserLogged();
          try {
            if (!user.error) {
              setAuth(user);
            } else {
              setAuth(null);
            }
            navigate("/");
          } catch (e) {
            alert(textApp.msg.error);
          }
        }
      } catch (error) {}
    };

    fetchData();
  };

  return (
    <section className="login-page">
      <h2>{textLogin.header}</h2>
      <form className="input-login" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          minLength="6"
          maxLength="255"
          onChange={onEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          minLength="6"
          maxLength="255"
          onChange={onPasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="login-page__footer">
        {textLogin.footer}{" "}
        <Link to="/register">{textLogin.footerRegisterLink}</Link>
      </p>
    </section>
  );
};

export default Login;
