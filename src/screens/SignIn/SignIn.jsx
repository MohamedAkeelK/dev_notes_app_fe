import { useState } from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav.jsx";

const SignIn = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password_digest: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      navigate("/projects");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password_digest: "",
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
          Sign In
        </button>
      );
    }
  };

  const { email, password_digest } = form;

  return (
    <>
      <Nav />
      <div className="signup-form-container">
        <form onSubmit={onSignIn} className="signup-form">
          <h1>Sign In</h1>
          <label>Email</label>
          <input
            required
            type="text"
            name="email"
            value={email}
            placeholder="Enter Email"
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
          {renderError()}
        </form>
      </div>
    </>
  );
};

export default SignIn;
