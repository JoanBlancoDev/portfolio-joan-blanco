import { m, useReducedMotion } from '../../lib/motion';
import { useEffect, useState } from 'react'
import Typewriter from './Typewriter'
import { principalParagraph, secondaryParagraph } from '../../constants/typewriter'
import { SocialLinks } from '../ui/SocialLinks'
import { profile } from '../../data/portfolio'
import { LinkedInIcon } from '../icons/LinkedinIcon'
import { GitHubIcon } from '../icons/GitHubIcon'
import MotionProvider from '../ui/MotionProvider'
import { useAppTranslation } from '../../hooks/useAppTranslation';

export const HeroSectionAnimated = () => {
  const prefersReducedMotion = useReducedMotion();
  const { t, canTranslate } = useAppTranslation();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const canRenderTranslations = isHydrated && canTranslate;

  const principalWords = [
    canRenderTranslations ? t('hero.typewriterPrincipal', principalParagraph.es[0]) : principalParagraph.es[0]
  ];

  const secondaryWords = [
    canRenderTranslations ? t('hero.typewriterSecondary.0', secondaryParagraph.es[0]) : secondaryParagraph.es[0],
    canRenderTranslations ? t('hero.typewriterSecondary.1', secondaryParagraph.es[1]) : secondaryParagraph.es[1],
    canRenderTranslations ? t('hero.typewriterSecondary.2', secondaryParagraph.es[2]) : secondaryParagraph.es[2],
    canRenderTranslations ? t('hero.typewriterSecondary.3', secondaryParagraph.es[3]) : secondaryParagraph.es[3]
  ];

  return (
    <MotionProvider>
      <m.section
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="hero" aria-label={canRenderTranslations ? t('hero.aria', 'Hero') : 'Hero'} className="hero-screen-offset container-section flex flex-col justify-center items-center">

        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <m.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18, scaleX: prefersReducedMotion ? 1 : 0.6 }}
            animate={{ opacity: 1, y: 0, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0.5 }}
            className="font-mono text-sm md:text-base opacity-80">{canRenderTranslations ? t('hero.hello', '¡Hola Mundo!') : '¡Hola Mundo!'}</m.p>

          <Typewriter
            repeat={false}
            fadeIn
            customClass="min-h-14 text-balance leading-tight text-5xl md:text-6xl font-extrabold"
            words={principalWords}
          />

          <m.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18, scaleX: prefersReducedMotion ? 1 : 0.65 }}
            animate={{ opacity: 1, y: 0, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0.5 }}
            className="text-lg md:text-2xl text-zinc-300">{canRenderTranslations ? t('hero.role', profile.role.es) : profile.role.es}</m.p>

          <Typewriter
            repeat
            fadeIn
            showCursor={false}
            customClass="md:text-base font-mono min-h-6 text-sm text-zinc-400"
            words={secondaryWords}
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 md:mt-20">
          <a href="#projects" className="btn btn-primary text-center">{canRenderTranslations ? t('hero.cta.projects', 'Ver Proyectos') : 'Ver Proyectos'}</a>
          <button className="btn btn-outline">{canRenderTranslations ? t('hero.cta.cv', 'Descargar CV') : 'Descargar CV'}</button>
        </div>
        <div className='mt-30 w-full flex justify-center items-center gap-4 md:gap-8'>
          <SocialLinks
            href={profile.linkedin}
            ariaLabel={canRenderTranslations ? t('hero.linkedin.aria', 'Abrir LinkedIn de Joan Blanco') : 'Abrir LinkedIn de Joan Blanco'}
            variant="outline"
            className='w'
          >
            <LinkedInIcon />
          </SocialLinks>

          <SocialLinks
            href={profile.github}
            ariaLabel={canRenderTranslations ? t('hero.github.aria', 'Abrir GitHub de Joan Blanco') : 'Abrir GitHub de Joan Blanco'}
            variant="outline"
          >
            <GitHubIcon />
          </SocialLinks>
        </div>
      </m.section>
    </MotionProvider>
  )
}
