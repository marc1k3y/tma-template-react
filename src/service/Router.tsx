import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { MainScreen } from "../screens/Main";
import { AboutScreen } from "../screens/About";

const routes = [
  { path: "/", element: <MainScreen /> },
  { path: "/about", element: <AboutScreen /> },
];

export const AppRouter = () => {
  return (
    <BrowserRouter>
      {routes.map((item) => <Route key={item.path} path={item.path} element={item.element} />)}
      <Route path="*" element={<Navigate to="/" />} />
    </BrowserRouter>
  );
}