'use client';

import Link from 'next/link';
import {
  featuredSnippetContent,
  getContextualLinksForPage,
  InternalLink,
} from '../../lib/internal-linking';

interface InternalLinkingProps {
  currentPage?: string;
  title?: string;
  description?: string;
  showFeaturedSnippets?: boolean;
  maxLinks?: number;
  className?: string;
}

export default function InternalLinking({
  currentPage,
  title = 'Related Resources',
  description,
  showFeaturedSnippets = false,
  maxLinks = 6,
  className = '',
}: InternalLinkingProps) {
  const relatedLinks = currentPage ? getContextualLinksForPage(currentPage, maxLinks) : [];

  // Get featured snippet content for current page
  const featuredContent =
    showFeaturedSnippets && currentPage
      ? featuredSnippetContent.find((snippet) => snippet.source.includes(currentPage))
      : null;

  if (!relatedLinks.length && !featuredContent) {
    return null;
  }

  return (
    <section className={`internal-linking ${className}`}>
      {featuredContent && (
        <div className="featured-snippet-section mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{featuredContent.question}</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">{featuredContent.answer}</p>
          <div className="related-links">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Related Resources:</h4>
            <ul className="space-y-1">
              {featuredContent.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                  >
                    {link.text}
                  </Link>
                  {link.description && (
                    <span className="text-gray-500 text-xs ml-2">- {link.description}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {relatedLinks.length > 0 && (
        <div className="related-resources">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <div
                key={link.href}
                className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <Link href={link.href} className="block group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {link.text}
                  </h3>
                  {link.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">{link.description}</p>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

interface ContextualLinkProps {
  href: string;
  text: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ContextualLink({
  href,
  text,
  description,
  className = '',
  children,
}: ContextualLinkProps) {
  return (
    <Link
      href={href}
      className={`contextual-link text-blue-600 hover:text-blue-800 hover:underline transition-colors ${className}`}
      title={description}
    >
      {children || text}
    </Link>
  );
}

interface BreadcrumbLinkProps {
  items: Array<{
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function BreadcrumbLink({ items, className = '' }: BreadcrumbLinkProps) {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={`${item.text}-${index}`} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-4 h-4 text-gray-400 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className="text-blue-600 hover:text-blue-800 hover:underline">
                {item.text}
              </Link>
            ) : (
              <span className="text-gray-500 font-medium">{item.text}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
