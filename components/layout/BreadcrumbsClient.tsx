"use client";
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const breadcrumbMap = [
  { path: "/", name: "Home" },
  { path: "/current-listing", name: "Vistas Listing" },
  { path: "/communities", name: "Communities" },
  { path: "/market", name: "Market" },
  { path: "/market-reports", name: "Market Reports" },
  { path: "/compare", name: "Compare" },
  { path: "/the-vistas", name: "The Vistas" },
  { path: "/sold", name: "Sold" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/new-homes-summerlin", name: "New Homes" },
  { path: "/downtown-summerlin", name: "Downtown Summerlin" },
];

function getBreadcrumbList(pathname: string) {
  const urlBase = "https://summerlinwestrealestate.com";
  const crumbs = [];
  let pathAccumulator = "";
  for (const { path, name } of breadcrumbMap) {
    if (pathname === path || (path !== "/" && pathname.startsWith(path))) {
      pathAccumulator = path;
      crumbs.push({ name, url: urlBase + path });
      if (pathname === path) break;
    }
    if (path === "/") {
      crumbs.push({ name, url: urlBase + path });
    }
  }
  // Remove duplicates
  return crumbs.filter((v, i, arr) => arr.findIndex(x => x.url === v.url) === i);
}

export default function BreadcrumbsClient() {
  const pathname = usePathname() || '/';
  const breadcrumbs = useMemo(() => getBreadcrumbList(pathname), [pathname]);
  const breadcrumbJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  }, [breadcrumbs]);

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol>
          {breadcrumbs.map((crumb, idx) => (
            <li key={crumb.url}>
              <a href={crumb.url}>{crumb.name}</a>
              {idx < breadcrumbs.length - 1 && ' / '}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(breadcrumbJsonLd)}</script>
    </>
  );
} 