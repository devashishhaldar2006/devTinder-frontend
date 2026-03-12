import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <h1>Welcome to Tinder</h1>
        <p>Discover new connections!</p>
      </div>
    </>
  );
}

export default App;
