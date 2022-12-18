import { useState } from "react";
import "./SignUp.css";
import { signUp } from "../../services/users";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav.jsx";

const SignUp = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password_digest: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password_digest: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      );
    }
  };

  const { username, email, password_digest, passwordConfirmation } = form;

  return (
    <>
      <Nav />
      <div className="signup-form-container">
        <form onSubmit={onSignUp} className="signup-form">
          <h1>Welcome to DevNotes</h1>
          <h2>Sign up to Start Posting!</h2>
          <label>Username</label>
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter username"
            onChange={handleChange}
          />
          <label>Email address</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            name="password_digest"
            value={password_digest}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label>Password Confirmation</label>
          <input
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </>
  );
};

export default SignUp;
