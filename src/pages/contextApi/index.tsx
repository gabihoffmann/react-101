import { ChildrenA } from "./children/childrenA";
import { ChildrenB } from "./children/childrenB";
import { ChildrenC } from "./children/childrenC";
import { AuthProvider } from "./context/auth";

const code1 = `import { AuthProvider } from "./context/auth";
export function ContextApiPage() {
  return (
    <AuthProvider>
      <Children/>
    </AuthProvider>
  );
}`;

const code2 = `const AuthContext = createContext<IAuthContext>(initialContext);

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

export { AuthContext, AuthProvider };`;

const code3 = `
export function Children(props: Props) {
  const { logged, setLogged } = useContext(AuthContext);

  return (
    <div>
        <p>Logged: {String(logged)}</p>
        <button onClick={setLogged}>{logged ? "logout" : "login"}</button>
    </div>
  );
}`;

export function ContextApiPage() {
  return (
    <AuthProvider>
      <section about="context api">
        <div className="title">
          <h2>Context Api</h2>
        </div>
        <div className="container">
          <div className="content">
            <ChildrenA title="level 1">
              <ChildrenC title="level 2" />
              <br />
              <ChildrenA title="level 2">
                <ChildrenA title="level 3">
                  <ChildrenA title="level 4">
                    <ChildrenB title="level 5" />
                  </ChildrenA>
                </ChildrenA>
              </ChildrenA>
            </ChildrenA>
          </div>
          <div className="code">
            <div>
              <pre>
                <code>{code2}</code>
              </pre>
              <hr />
              <pre>
                <code>{code1}</code>
              </pre>
              <hr />
              <pre>
                <code>{code3}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </AuthProvider>
  );
}
