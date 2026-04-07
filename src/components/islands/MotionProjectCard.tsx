import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import '../../scripts/i18n-react';
import { useEffect, useState } from 'react';

type Project = {
  title: { es: string; en: string };
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  stack: string[];
  link: string;
  github: string;
};

interface MotionProjectCardProps {
  project: Project;
  index: number;
}

export default function MotionProjectCard({ project, index }: MotionProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const { t, i18n } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const lang = isHydrated && i18n.language?.startsWith('en') ? 'en' : 'es';
  const canTranslate = isHydrated && i18n.isInitialized;
  const hasLiveDemo = project.link && project.link !== '#';
  const hasRepo = project.github && project.github !== '#';

  return (
    <motion.article
      className="card-surface group relative overflow-hidden"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
      />

      <div className="relative z-10">
        <p className="text-xs font-mono text-(--color-text-low)">{canTranslate ? t('projects.card.projectNumber') : 'Proyecto'} {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 text-xl font-bold leading-tight">{project.title[lang]}</h3>
        <p className="mt-2 text-sm md:text-base text-(--color-text-low)">{project.tagline[lang]}</p>
        <p className="mt-4 leading-relaxed text-(--color-text-high)/90">{project.description[lang]}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={`${project.title.es}-${tech}`}
              className="rounded-full border border-(--glass-border) bg-(--glass-bg) px-3 py-1 text-xs md:text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {hasLiveDemo ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary">
              {canTranslate ? t('projects.card.viewProject') : 'Ver proyecto'} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="btn-outline cursor-not-allowed opacity-70" aria-disabled="true">
              {canTranslate ? t('projects.card.privateDemo') : 'Demo privada'}
            </span>
          )}

          {hasRepo ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
              {canTranslate ? t('projects.card.code') : 'Código'} <span aria-hidden="true">&lt;/&gt;</span>
            </a>
          ) : (
            <span className="btn-outline cursor-not-allowed opacity-70" aria-disabled="true">
              {canTranslate ? t('projects.card.privateRepo') : 'Repo privado'}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
