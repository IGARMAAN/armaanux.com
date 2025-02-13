import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Navbar />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
