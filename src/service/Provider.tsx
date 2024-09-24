import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { PropsWithChildren, useEffect, useState } from "react";
import { authAPI } from "./api";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

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

  useEffect(() => {
    import("eruda").then(eruda => eruda.default.init());
  }, []);

  if (isAuth) return (
    <TonConnectUIProvider manifestUrl={"https://marc1k3y.github.io/tma-racer/tonconnect-manifest.json"}>
      <div>
        {tmp}
        {children}
      </div>
    </TonConnectUIProvider>
  );
  if (!initDataRaw) return <div>Loader..</div>;
}