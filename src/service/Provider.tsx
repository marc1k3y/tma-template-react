import { PropsWithChildren, StrictMode, useEffect } from "react";
import { AppRouter } from "./Router";

export const AppProvider = ({ children }: PropsWithChildren) => {

  useEffect(() => {
    import("eruda").then(eruda => eruda.default.init());
  }, []);

  return (
    <StrictMode>
      <AppRouter>
        {children}
      </AppRouter>
    </StrictMode>
  );
}