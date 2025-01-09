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

// Components
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <div className="border-2 m-3">
        {/* Navbar */}
        <div className="card flex justify-content-center">
          <Navbar />
        </div>
        {/* Page Content */}
        <RouterProvider router={Router} />
        {/* Footer */}
        <div className="card flex justify-content-center">
          <Footer />
        </div>
      </div>
    </PrimeReactProvider>
  </StrictMode>
);
