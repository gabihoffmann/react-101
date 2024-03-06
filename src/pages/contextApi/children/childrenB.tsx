import { useContext } from "react";
import { AuthContext } from "../context/auth";

interface Props {
  children?: React.ReactNode;

  title: string;
}

export function ChildrenB(props: Props) {
  const { logged, setLogged } = useContext(AuthContext);

  return (
    <div className="">
      <div className="box">
        <span>children component - {props.title}</span>
        <p>Logged: {String(logged)}</p>
        <button onClick={setLogged}>{logged ? "logout" : "login"}</button>
      </div>
    </div>
  );
}
