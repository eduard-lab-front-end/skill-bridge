import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SessionContextProvider } from "./contexts/SessionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SessionContextProvider>
  </StrictMode>
);
