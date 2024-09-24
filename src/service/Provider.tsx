import { PropsWithChildren, StrictMode, useEffect } from "react";

export const AppProvider = ({ children }: PropsWithChildren) => {

  useEffect(() => {
    import("eruda").then(eruda => eruda.default.init());
  }, []);

  return (
    <StrictMode>
      {children}
    </StrictMode>
  );
}