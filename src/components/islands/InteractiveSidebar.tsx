import { useEffect, useLayoutEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    applyLanguage?: () => void;
    i18next?: {
      isInitialized: boolean;
      getFixedT: (lng: string) => (key: string) => string;
    };
  }
}

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function setToggleAria(el: HTMLButtonElement | null, open: boolean) {
  if (!el) return;
  const i18n = window.i18next;
  const lang = document.documentElement.dataset.lang === 'en' ? 'en' : 'es';
  if (i18n?.isInitialized) {
    el.setAttribute('aria-label', i18n.getFixedT(lang)(open ? 'sidebar.closeMenu' : 'sidebar.openMenu'));
  } else {
    el.setAttribute(
      'aria-label',
      open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación',
    );
  }
}

interface Props {
  links?: { href: string; label: string; i18nKey: string }[];
  className?: string;
  btnClassName?: string;
}

export const InteractiveSidebar = ({ links = [], className = '', btnClassName = '' }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    setToggleAria(btnRef.current, isActive);
  }, [isActive]);

  useEffect(() => {
    const onLang = () => setToggleAria(btnRef.current, isActive);
    window.addEventListener('app:lang-change', onLang);
    return () => window.removeEventListener('app:lang-change', onLang);
  }, [isActive]);

  useEffect(() => {
    if (isActive) window.applyLanguage?.();
  }, [isActive]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setIsActive(!isActive)}
        className={`mobile-nav-toggle lg:hidden ${btnClassName} z-20 self-center flex items-center justify-center`}
        aria-expanded={isActive}
        aria-controls="mobile-nav-drawer"
        id="mobile-nav-toggle"
        data-expanded={isActive ? 'true' : 'false'}
      >
        <span className="mobile-nav-toggle-icon" aria-hidden="true">
          <span className={isActive ? 'mobile-nav-toggle-swap is-hidden' : 'mobile-nav-toggle-swap'}>
            <MenuIcon />
          </span>
          <span className={isActive ? 'mobile-nav-toggle-swap' : 'mobile-nav-toggle-swap is-hidden'}>
            <CloseIcon />
          </span>
        </span>
      </button>

      <aside
        id="mobile-nav-drawer"
        data-open={isActive ? 'true' : 'false'}
        className={`mobile-nav-drawer lg:hidden ${className} fixed top-0 left-0 z-10 flex h-[75vh] w-full flex-col items-center justify-center p-8 shadow-2xl`}
        aria-hidden={!isActive}
        inert={!isActive || undefined}
      >
        <nav aria-label="Móvil" className="mobile-nav-drawer-inner w-full">
          <ul className="flex w-full flex-col items-center gap-6">
            {links.map((link) => (
              <li key={link.href} className="mobile-nav-link-stagger">
                <a
                  href={link.href}
                  className="text-2xl font-semibold transition-colors duration-200 hover:text-[var(--color-accent)]"
                  style={{ color: 'var(--color-text-high)' }}
                  data-i18n={link.i18nKey}
                  onClick={() => setIsActive(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
