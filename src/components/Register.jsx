import { useState } from "react";
import "../styles/Register.css";
import axios from "axios";
import { toast } from "react-toastify";
const API_URL = import.meta.env.VITE_API_URL;

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // creating payload
      const payload = {
        name: name,
        email: email,
        password: password,
      };

      // Making API Register Request :
      // await axios
      //   .post("http://localhost:3000/user/register", payload)
      await axios
        .post(`${API_URL}/user/register`, payload)
        .then((res) => {
          toast.success(res.data.message);

          console.log("API Response : ", res.data.message);
        })
        .catch((err) => {
          toast.error(err.response.data.message);

          console.log(
            "Error : ",
            err.response.data || "Error White Registering..!"
          );
        });

      // dont have much need of catch block toast error as we handled it above
    } catch (err) {
      toast.error(err.response?.data?.message || "Error While Registering!");
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <button disabled={loading}>
          {loading ? "Submitting..!" : "Register"}
        </button>
      </form>
    </div>
  );
}
