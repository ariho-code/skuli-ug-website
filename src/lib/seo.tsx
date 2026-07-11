import { useEffect } from 'react';

export const SITE_URL = 'https://skuliug.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: object | object[];
}

export default function Seo({ title, description, path, image = DEFAULT_IMAGE, jsonLd }: SeoProps) {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertCanonical(url);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    let script: HTMLScriptElement | null = null;
    if (jsonLdString) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = jsonLdString;
      document.head.appendChild(script);
    }

    return () => {
      if (script) document.head.removeChild(script);
    };
  }, [title, description, path, image, jsonLdString]);

  return null;
}
