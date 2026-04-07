import React from 'react'
interface SocialLinksProps {
  title?: string;
  titleI18n?: string;
  href: string;
  className?: string;
  ariaLabel?: string;
  ariaLabelI18n?: string;
  icon?: React.ReactNode | string;
  children?: React.ReactNode;
  variant ?: 'primary' | 'outline';
  isMailto ?: boolean;
}
export const SocialLinks = ({title, titleI18n, href, className, ariaLabel, ariaLabelI18n, icon, children, variant, isMailto}: SocialLinksProps) => {
  return (
     <a
        href={isMailto ? `mailto:${href}` : href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className ?? ''} btn-${variant || 'primary'}`.trim()}
        aria-label={ariaLabel}
        data-i18n-aria={ariaLabelI18n}
      >
        {children ?? icon}

        {titleI18n ? <span data-i18n={titleI18n}>{title || ''}</span> : (title || "")}
      </a>
  )
}
