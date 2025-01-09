import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// PrimeReact
import { PrimeReactProvider } from "primereact/api";
// PrimeReact core styles
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
// PrimeIcons for icons
import "primeicons/primeicons.css";

// React Router
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Route";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={Router} />
    </PrimeReactProvider>
  </StrictMode>
);
