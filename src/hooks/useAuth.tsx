import { useContext } from "react";
import { AuthContext } from "~/context/Auth";

export function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  return { user, setUser };
}
