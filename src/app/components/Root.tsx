import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import logoDark from "figma:asset/c53c6f4b27ee8279ac0a86decce00a8bd6e66939.png";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    // Set the favicon
    const setFavicon = () => {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll("link[rel*='icon']");
      existingFavicons.forEach((favicon) => favicon.remove());

      // Add new favicon
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.type = "image/png";
      favicon.href = logoDark;
      document.head.appendChild(favicon);

      // Add Apple touch icon
      const appleTouchIcon = document.createElement("link");
      appleTouchIcon.rel = "apple-touch-icon";
      appleTouchIcon.href = logoDark;
      document.head.appendChild(appleTouchIcon);
    };

    setFavicon();
  }, []);

  useEffect(() => {
    // Set page title based on current route
    const pageTitles: { [key: string]: string } = {
      "/": "Dagona Farms - Home of Agriculture",
      "/about": "About Us - Dagona Farms",
      "/services": "Our Services - Dagona Farms",
      "/products": "Our Products - Dagona Farms",
      "/contact": "Contact Us - Dagona Farms",
    };

    const title = pageTitles[location.pathname] || "Dagona Farms";
    document.title = title;
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
