"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/current-listing", label: "Vistas Listing" },
  { href: "/communities", label: "Communities" },
  { href: "/market", label: "Market" },
  { href: "/hidden-home-equity-tax", label: "Hidden Home Equity Tax" },
  { href: "/compare", label: "Compare" },
  { href: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0", label: "The Vistas", external: true },
  { href: "/sold", label: "Sold" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header>
      <nav className={styles.navDesktop} aria-label="Main navigation">
        {navLinks.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ) : (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}
