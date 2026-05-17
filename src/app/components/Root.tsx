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

    // Set Open Graph meta tags for link previews
    const setOpenGraphTags = () => {
      // Use the OG image URL - for production, replace with actual image URL
      const ogImageUrl = "https://www.dagonafarms.org/images/og-image.jpg";

      const ogTags = [
        // Basic Meta Tags
        { name: "keywords", content: "agriculture, farming, Nigeria, livestock, aquaculture, sustainable farming, crop production, Dagona Farms" },
        { name: "author", content: "Dagona Farms" },
        { name: "robots", content: "index, follow" },

        // Open Graph Tags
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Dagona Farms" },
        { property: "og:locale", content: "en_NG" },
        { property: "og:image", content: ogImageUrl },
        { property: "og:image:secure_url", content: ogImageUrl },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Dagona Farms - Home of Agriculture" },

        // Twitter Card Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@DagonaFarms" },
        { name: "twitter:creator", content: "@DagonaFarms" },
        { name: "twitter:image", content: ogImageUrl },
        { name: "twitter:image:alt", content: "Dagona Farms - Home of Agriculture" },

        // Mobile Tags
        { name: "theme-color", content: "#15803d" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { name: "apple-mobile-web-app-title", content: "Dagona Farms" },
      ];

      ogTags.forEach((tag) => {
        const selector = tag.property
          ? `meta[property="${tag.property}"]`
          : `meta[name="${tag.name}"]`;

        let existingTag = document.querySelector(selector);

        if (existingTag) {
          existingTag.setAttribute("content", tag.content);
        } else {
          const meta = document.createElement("meta");
          if (tag.property) {
            meta.setAttribute("property", tag.property);
          } else if (tag.name) {
            meta.setAttribute("name", tag.name);
          }
          meta.setAttribute("content", tag.content);
          document.head.appendChild(meta);
        }
      });
    };

    setOpenGraphTags();
  }, []);

  useEffect(() => {
    // Set page title and meta description based on current route
    const pageInfo: { [key: string]: { title: string; description: string } } = {
      "/": {
        title: "Dagona Farms | Home of Agriculture",
        description: "Modern agriculture, sustainable farming, and food production solutions by Dagona Farms.",
      },
      "/about": {
        title: "About Us | Dagona Farms",
        description: "Founded in February 2025, Dagona Farms is an integrated agribusiness enterprise delivering sustainable farming solutions across Northern Nigeria and West Africa.",
      },
      "/services": {
        title: "Our Services | Dagona Farms",
        description: "Comprehensive agricultural services including GAP Training, Extension Services, Farm Management, Market Linkages, and Business Development Support.",
      },
      "/products": {
        title: "Our Products | Dagona Farms",
        description: "Quality agricultural products from sustainable farming: Rice, Maize, Vegetables, Livestock, Poultry, and Aquaculture products.",
      },
      "/contact": {
        title: "Contact Us | Dagona Farms",
        description: "Get in touch with Dagona Farms for partnership opportunities, service inquiries, and product orders. Offices in Kano and Abuja, Nigeria.",
      },
    };

    const info = pageInfo[location.pathname] || {
      title: "Dagona Farms | Home of Agriculture",
      description: "Modern agriculture, sustainable farming, and food production solutions by Dagona Farms.",
    };

    document.title = info.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", info.description);

    // Update Open Graph title and description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", info.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", info.description);

    // Update Twitter title and description
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute("content", info.title);

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement("meta");
      twitterDescription.setAttribute("name", "twitter:description");
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute("content", info.description);

    // Update Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", window.location.href);
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
