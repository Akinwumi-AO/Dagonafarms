import { Outlet } from "react-router";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import logoDark from "figma:asset/c53c6f4b27ee8279ac0a86decce00a8bd6e66939.png";

export default function Root() {
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
