import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { PropsWithChildren, useEffect, useState } from "react";
import { authAPI } from "./api";

export const AppProvider = ({ children }: PropsWithChildren) => {
  const { initDataRaw } = retrieveLaunchParams();
  const [isAuth, setIsAuth] = useState(false);
  const [tmp, setTmp] = useState("");

  useEffect(() => {
    if (initDataRaw) {
      authAPI(initDataRaw).then((res) => {
        setTmp(JSON.stringify(res));
        setIsAuth(true);
      });
    }
  }, [initDataRaw]);

  if (isAuth) return (
    <div>
      {tmp}
      {children}
    </div>
  );
  if (!initDataRaw) return <div>Loader..</div>;
}