import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { skills } from '../../data/portfolio';
import { useTranslation } from 'react-i18next';
import '../../scripts/i18n-react';
import { useEffect, useState } from 'react';

type SkillGroup = {
  titleKey: string;
  titleFallback: string;
  items: string[];
};

const groups: SkillGroup[] = [
  { titleKey: 'skills.group.frontend', titleFallback: 'Frontend', items: skills.frontend },
  { titleKey: 'skills.group.backend', titleFallback: 'Backend', items: skills.backend },
  { titleKey: 'skills.group.tools', titleFallback: 'Tools', items: skills.tools },
];

export default function SkillsGrid() {
  const prefersReducedMotion = useReducedMotion();
  const { t, i18n } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const canTranslate = isHydrated && i18n.isInitialized;

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group, groupIndex) => (
        <motion.article
          key={group.titleKey}
          className="card-surface"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : groupIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-lg font-semibold">{canTranslate ? t(group.titleKey) : group.titleFallback}</h3>

          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item, itemIndex) => (
              <motion.li
                key={`${group.titleKey}-${item}`}
                className="rounded-full border border-(--glass-border) bg-(--glass-bg) px-3 py-1.5 text-sm text-(--color-text-high)"
                initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.3,
                  delay: prefersReducedMotion ? 0 : groupIndex * 0.08 + itemIndex * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.03 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
