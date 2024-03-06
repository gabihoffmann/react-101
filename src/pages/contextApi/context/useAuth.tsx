import { useCallback, useState } from "react";

export function useAuth() {
  const [logged, setLogged] = useState(false);

  const changeLogged = useCallback(() => {
    setLogged((prev) => !prev);
  }, [setLogged]);

  return {
    logged,
    changeLogged,
  };
}
