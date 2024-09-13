import { useState } from "react";
import { createContext } from "react";
import { AuthContextType, Props, User } from "~types";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => { }
});

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
