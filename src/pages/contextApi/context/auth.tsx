import { createContext } from "react";
import { useAuth } from "./useAuth";

export interface IAuthContext {
  logged: boolean;
  setLogged: () => void;
}
export interface IAuthProvider {
  children?: React.ReactNode;
}

const initialContext = {
  logged: false,
  setLogged: () => {},
};

const AuthContext = createContext<IAuthContext>(initialContext);

function AuthProvider({ children }: IAuthProvider) {
  const { logged, changeLogged } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        logged,
        setLogged: changeLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
