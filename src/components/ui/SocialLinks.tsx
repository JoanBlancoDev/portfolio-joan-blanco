import type { ReactNode } from 'react';

interface SocialLinksProps {
  title?: string;
  titleI18n?: string;
  href: string;
  className?: string;
  ariaLabel?: string;
  ariaLabelI18n?: string;
  children?: ReactNode;
  variant?: 'primary' | 'outline';
}

export const SocialLinks = ({
  title,
  titleI18n,
  href,
  className,
  ariaLabel,
  ariaLabelI18n,
  children,
  variant = 'primary',
}: SocialLinksProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${className ?? ''} btn-${variant}`.trim()}
    aria-label={ariaLabel}
    data-i18n-aria={ariaLabelI18n}
  >
    {children}
    {titleI18n ? <span data-i18n={titleI18n}>{title ?? ''}</span> : (title ?? '')}
  </a>
);
