import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("momo@gmail.com");
  const [password, setPassword] = useState("password1234");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      console.log(res.data);
      dispatch(addUser(res.data));
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="card bg-base-100/90 shadow-2xl border border-base-300/60 backdrop-blur">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center mb-2">
              Welcome back
            </h2>
            <p className="text-center text-base-content/70 mb-6">
              Sign in to continue to{" "}
              <span className="font-semibold">💕DevTinder</span>.
            </p>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.dev"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input input-bordered w-full"
                  required
                />
                <label className="label mt-1 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span className="label-text text-sm">Remember me</span>
                  </div>
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-sm"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary w-full">
                  Log in
                </button>
              </div>
            </form>

            <div className="divider my-6">or</div>

            <button className="btn btn-outline w-full gap-2">
              <span className="text-lg">⚡</span>
              Continue with GitHub
            </button>

            <p className="mt-4 text-center text-sm text-base-content/70">
              New to <span className="font-semibold">devTinder</span>?{" "}
              <a href="#" className="link link-hover font-medium">
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
