import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";

export function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const signIn = () => {
    if (username.length > 0 && password.length > 0) {
      setUser({
        username: username,
        password: password,
      });
      navigate("/", { replace: true })
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <Link to="/" className="text-4xl mb-10 underline">FE</Link>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" className="border-slate-600 border-2 p-2 rounded-xl" value={username} onChange={e => setUsername(e.target.value)} />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" className="border-slate-600 border-2 p-2 rounded-xl" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={() => signIn()} className="border-slate-600 border-2 p-2 rounded-xl px-6 py-4">Sign in</button>
    </div>
  )
}
