import { useState } from "react";
import "../styles/Login.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // make api call here
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // creating payload
      const payload = {
        email: email,
        password: password,
      };

      // Making API Register Request :
      // await axios
      //   .post("http://localhost:3000/user/login", payload)
      await axios
        .post(`${API_URL}/user/login`, payload)
        .then((res) => {
          toast.success(res.data.message);
          localStorage.setItem("token", JSON.stringify(res.data.token));

          console.log("API Response : ", res.data);
          navigate("/profile");
        })
        .catch((err) => {
          toast.error(err.response.data.message);

          console.log(
            "Error : ",
            err.response.data || "Error White Logging..!"
          );
        });

      // dont have much need of catch block toast error as we handled it above
    } catch (err) {
      toast.error(err.response?.data?.message || "Error While Logging...!");
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form className="auth-form">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
          value={password}
        />
        <button onClick={handleSubmit}>
          {loading ? "Submitting..!" : "Login"}
        </button>
      </form>
    </div>
  );
}
