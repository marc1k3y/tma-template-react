import "./index.css";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./service/Provider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<AppProvider><App /></AppProvider>);
