/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Locations from "./pages/Locations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import { CartProvider } from "./CartContext";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home onNavigate={setActivePage} />;
      case "menu":
        return <Menu />;
      case "locations":
        return <Locations />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "cart":
        return <Cart onNavigate={setActivePage} />;
      case "auth":
        return <Auth onNavigate={setActivePage} />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <Layout activePage={activePage} setActivePage={setActivePage}>
          {renderPage()}
        </Layout>
      </CartProvider>
    </ThemeProvider>
  );
}

