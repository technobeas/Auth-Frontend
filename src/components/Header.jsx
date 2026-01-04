import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {

  const navigate = useNavigate()

  const handleLogOUt = () => {
    localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <header className="header">
      <h1 className="logo">MyApp</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogOUt}>Logout</button>
      </nav>
    </header>
  );
}
