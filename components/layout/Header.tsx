'use client';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Header/Logo';
import styles from './Header.module.css';

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
  submenu?: NavLink[];
}

const navLinks: NavLink[] = [
  // 1. Properties (PRIMARY ACTION)
  {
    href: '/properties',
    label: 'Properties',
    submenu: [
      { href: '/current-listing', label: 'Current Listings' },
      { href: '/sold', label: 'Recent Sales' },
      {
        href: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0',
        label: 'Home Search',
        external: true,
      },
    ],
  },
  // 2. Neighborhoods (LOCATION FOCUS)
  {
    href: '/communities',
    label: 'Neighborhoods',
    submenu: [
      { href: '/the-vistas', label: 'The Vistas' },
      { href: '/service-area', label: 'Service Area' },
      { href: '/communities/san-marcos', label: 'San Marcos' },
      { href: '/communities/casa-rosa', label: 'Casa Rosa' },
      { href: '/communities/solano', label: 'Solano' },
      { href: '/communities/encanto', label: 'Encanto' },
      { href: '/communities/paradiso', label: 'Paradiso' },
      { href: '/communities/palmilla', label: 'Palmilla' },
    ],
  },
  // 3. Success Stories (SOCIAL PROOF - TRUST BUILDER)
  { href: '/testimonials', label: 'Success Stories' },
  // 4. Latest News (CREDIBILITY & MARKET INSIGHTS)
  { href: '/press', label: 'Latest News' },
  // 5. Our Team (EXPERTISE)
  { href: '/team', label: 'Our Team' },
  // 6. About Dr. Jan Duffy (PERSONAL CONNECTION)
  { href: '/resume', label: 'About Dr. Jan Duffy' },
  // 7. Contact (CLEAR CTA)
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveSubmenu(label);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <nav className={styles.navDesktop} aria-label="Main navigation">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className={styles.navItem}
              onMouseEnter={() => link.submenu && handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
              role={link.submenu ? 'button' : undefined}
              tabIndex={link.submenu ? 0 : undefined}
            >
              {link.external ? (
                <a
                  href={link.href}
                  className={styles.navLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              )}

              {link.submenu && activeSubmenu === link.label && (
                <div className={styles.submenu}>
                  {link.submenu.map((subLink) => (
                    <div key={subLink.href} className={styles.submenuItem}>
                      {subLink.external ? (
                        <a
                          href={subLink.href}
                          className={styles.submenuLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {subLink.label}
                        </a>
                      ) : (
                        <Link href={subLink.href} className={styles.submenuLink}>
                          {subLink.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
