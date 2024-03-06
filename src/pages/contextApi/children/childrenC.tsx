import { useContext } from "react";
import { AuthContext } from "../context/auth";

interface Props {
  title: string;
}

export function ChildrenC({ title }: Props) {
  const { logged } = useContext(AuthContext);

  return (
    <div className="">
      <div className="box">
        <span>children component - {title}</span>
        <p>Context logged: {String(logged)}</p>
      </div>
    </div>
  );
}
