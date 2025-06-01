
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  noindex = false 
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    updateMetaTag('description', description);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update robots meta
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Update canonical link
    if (canonical) {
      updateCanonicalLink(canonical);
    }

    // Update Open Graph tags
    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:image', ogImage);
    if (canonical) {
      updateMetaProperty('og:url', canonical);
    }

    // Update Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    if (canonical) {
      updateMetaTag('twitter:url', canonical);
    }
  }, [title, description, keywords, canonical, ogImage, noindex]);

  const updateMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateMetaProperty = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateCanonicalLink = (href: string) => {
    let element = document.querySelector('link[rel="canonical"]');
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'canonical');
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };

  return null;
};

export default SEO;
