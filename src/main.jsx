import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

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

// TanStack React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";

// Create a client for react-query
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provide the client to your App */}
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <div className="m-3">
          {/* Navbar */}
          <header id="navbar" className="card flex justify-content-start">
            <Navbar />
          </header>
          {/* Page Content */}
          <RouterProvider router={Router} />
          {/* Footer */}
          <footer id="footer" className="card flex justify-content-start">
            <Footer />
          </footer>
        </div>
      </PrimeReactProvider>
    </QueryClientProvider>
  </StrictMode>
);
