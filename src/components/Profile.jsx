import { useEffect, useState } from "react";
import "../styles/Profile.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);


  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user.name);
        setEmail(res.data.user.email);
        console.log("res: " ,res)
      } catch (err) {
        console.error(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();

  }, [token]);


  if (loading) return <p>Loading profile...</p>;

  if (!user) return <p>Login First..!</p>;

  return (
    <div className="profile">
      <h2>My Profile</h2>

      <div className="profile-card">
        <p>
          <strong>Name:</strong> {user}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
}
