import React from 'react';
import { m, useReducedMotion } from '../../lib/motion';
import { experience } from '../../data/portfolio';
import { useAppTranslation } from '../../hooks/useAppTranslation';
import MotionProvider from '../ui/MotionProvider';

export default function ExperienceTimeline() {
  const prefersReducedMotion = useReducedMotion();
  const { lang } = useAppTranslation();

  return (
    <MotionProvider>
      <div className="relative mt-10">
        <m.div
          aria-hidden="true"
          className="absolute left-2 top-1 bottom-1 w-px bg-(--glass-border)"
          initial={{ scaleY: prefersReducedMotion ? 1 : 0, opacity: prefersReducedMotion ? 1 : 0.5 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'top' }}
        />

        <ul className="space-y-8">
          {experience.map((item, index) => (
            <m.li
              key={`${item.company}-${item.period.es}`}
              className="relative pl-10"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 24, y: prefersReducedMotion ? 0 : 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1,
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-(--color-bg) shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-primary)_24%,transparent)]"
              />

              <article className="card-surface">
                <header className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role[lang]}</h3>
                    <p className="text-sm text-(--color-text-low)">{item.company}</p>
                  </div>
                  <p className="text-xs md:text-sm font-mono text-primary">{item.period[lang]}</p>
                </header>

                <ul className="mt-4 space-y-2">
                  {item.description[lang].map((achievement) => (
                    <li key={achievement} className="text-sm md:text-base leading-relaxed text-(--color-text-high)/90">
                      <span className="mr-2 text-primary">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            </m.li>
          ))}
        </ul>
      </div>
    </MotionProvider>
  );
}
