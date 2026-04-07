// ✅ NO más lucide-react (959 KiB) — reemplazado con SVGs inline mínimos
// ✅ NO más framer-motion (bundle duplicado) — usando motion/react unificado
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next';
import '../../scripts/i18n-react';

// SVG inline del ícono Menu (hamburguesa) — 0 KB de dependencia externa
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

// SVG inline del ícono X (cerrar) — 0 KB de dependencia externa
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

interface Props {
    links?: { href: string, label: string, i18nKey: string }[];
    className?: string
    btnClassName?: string
}

export const InteractiveSidebar = ({ links = [], className = '', btnClassName = '' }: Props) => {
    const [isActive, setIsActive] = useState(false);
    const { t, i18n } = useTranslation();
    const [isHydrated, setIsHydrated] = useState(false);
    useEffect(() => {
        setIsHydrated(true);
    }, []);
    const canTranslate = isHydrated && i18n.isInitialized;

    // Traducción accesible para aria-label
    const ariaLabel = canTranslate
        ? isActive
            ? t('sidebar.closeMenu', 'Cerrar menú de navegación')
            : t('sidebar.openMenu', 'Abrir menú de navegación')
        : isActive
            ? 'Cerrar menú de navegación'
            : 'Abrir menú de navegación';

    return (
        <>
            <motion.button
                onClick={() => setIsActive(!isActive)}
                className={`lg:hidden ${btnClassName} z-20  self-center flex items-center justify-center`}
                aria-label={ariaLabel}
                initial={false}
                animate={{ rotate: isActive ? 90 : 0, scale: isActive ? 1.1 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <motion.span
                    key={isActive ? 'x' : 'menu'}
                    initial={{ opacity: 0, scale: 0.7, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.7, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'inline-flex' }}
                >
                    {isActive ? <CloseIcon /> : <MenuIcon />}
                </motion.span>
            </motion.button>

            <AnimatePresence>
                {isActive && (
                    <motion.aside
                        key="sidebar"
                        initial={{ y: -600, opacity: 0, clipPath: 'circle(0% at 50% 0%)' }}
                        animate={{ y: 0, opacity: 1, clipPath: 'circle(120% at 50% 0%)' }}
                        exit={{ y: -600, opacity: 0, clipPath: 'circle(0% at 50% 0%)' }}
                        transition={{ type: 'spring', stiffness: 60, damping: 18 }}
                        className={`lg:hidden ${className} fixed top-0 left-0 w-full h-[75vh] p-8 flex flex-col items-center justify-center z-10 shadow-2xl`}
                        style={{
                            borderBottomLeftRadius: '100vw',
                            borderBottomRightRadius: '100vw',
                            overflow: 'hidden',
                            background: 'var(--color-surface)',
                            maxHeight: 'var(--max-h-150)'
                        }}
                    >
                        <motion.ul
                            initial="closed"
                            animate="open"
                            variants={{
                                open: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                            className="w-full flex flex-col items-center gap-6"
                        >
                            {links.map((link) => (
                                <motion.li
                                    key={link.href}
                                    variants={{
                                        open: { opacity: 1, y: 0 },
                                        closed: { opacity: 0, y: -30 }
                                    }}
                                    whileHover={{ scale: 1.1, x: 8 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-2xl font-semibold transition-colors duration-200"
                                        style={{ color: 'var(--color-text-high)' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-high)')}
                                        onClick={() => setIsActive(false)}
                                    >
                                        {canTranslate ? t(link.i18nKey) : link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}
