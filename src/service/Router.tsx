import { PropsWithChildren, useEffect, useMemo } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { initNavigator } from "@telegram-apps/sdk";
import { useIntegration } from "@telegram-apps/react-router-integration";
import { MainScreen } from "../screens/Main";
import { AboutScreen } from "../screens/About";

const routes = [
  { path: "/", element: <MainScreen /> },
  { path: "/about", element: <AboutScreen /> },
];

export const RoutesElement = () => {
  return (
    <Routes>
      {routes.map((item) => {
        return <Route key={item.path} path={item.path} element={item.element} />
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export const AppRouter = ({ children }: PropsWithChildren) => {
  const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
  const [location, reactNavigator] = useIntegration(navigator);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <Router location={location} navigator={reactNavigator}>
      {children}
    </Router>
  );
}