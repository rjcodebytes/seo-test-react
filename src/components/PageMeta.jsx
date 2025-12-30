import { useEffect } from "react";

const PageMeta = ({
  title,
  description,
  keywords,
  canonical,
  image,
  url,
}) => {
  useEffect(() => {
    // --- Title ---
    if (title) document.title = title;

    // --- Function to set or update meta tags ---
    const setMeta = (attr, attrValue, content) => {
      if (!content) return;

      let selector =
        attr === "name"
          ? `meta[name="${attrValue}"]`
          : `meta[property="${attrValue}"]`;

      let metaTag = document.querySelector(selector);

      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute(attr, attrValue);
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute("content", content);
    };

    // Standard meta tags
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Open Graph (Facebook / Linkedin)
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url || canonical);
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", "website");

    // Twitter meta
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:card", "summary_large_image");

  }, [title, description, keywords, canonical, image, url]);

  return null;
};

export const AppWrapper = ({ children }) => <>{children}</>;

export default PageMeta;
