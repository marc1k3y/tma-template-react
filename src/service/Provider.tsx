import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { PropsWithChildren, useEffect, useState } from "react";
import { authAPI } from "./api";

export const AppProvider = ({ children }: PropsWithChildren) => {
  const { initDataRaw } = retrieveLaunchParams();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (initDataRaw) {
      authAPI(initDataRaw).then(() => setIsAuth(true));
    }
  }, [initDataRaw]);

  if (isAuth) return (
    <div>
      {children}
    </div>
  );
  if (!initDataRaw) return <div>Loader..</div>;
}