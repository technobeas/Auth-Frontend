import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtechtedRoutes from "./components/ProtechtedRoutes";
// import '../style/App.css'

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Router>
        <Header />
        <Routes>
          <Route element={<ProtechtedRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
