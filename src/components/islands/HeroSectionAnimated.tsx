import { motion, useReducedMotion, } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../scripts/i18n-react'
import Typewriter from './Typewriter'
import { principalParagraph, secondaryParagraph } from '../../constants/typewriter'
import { SocialLinks } from '../ui/SocialLinks'
import { profile } from '../../data/portfolio'
import { LinkedInIcon } from '../icons/LinkedinIcon'
import { GitHubIcon } from '../icons/GitHubIcon'

export const HeroSectionAnimated = () => {
  const prefersReducedMotion = useReducedMotion();
  const { t, i18n } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const canTranslate = isHydrated && i18n.isInitialized;

  const principalWords = [
    canTranslate ? t('hero.typewriterPrincipal') : principalParagraph.es[0]
  ];

  const secondaryWords = [
    canTranslate ? t('hero.typewriterSecondary.0') : secondaryParagraph.es[0],
    canTranslate ? t('hero.typewriterSecondary.1') : secondaryParagraph.es[1],
    canTranslate ? t('hero.typewriterSecondary.2') : secondaryParagraph.es[2],
    canTranslate ? t('hero.typewriterSecondary.3') : secondaryParagraph.es[3]
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="hero" aria-label={canTranslate ? t('hero.aria') : 'Hero'} className="hero-screen-offset container-section flex flex-col justify-center items-center">

      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18, scaleX: prefersReducedMotion ? 1 : 0.6 }}
          animate={{ opacity: 1, y: 0, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0.5 }}
          className="font-mono text-sm md:text-base opacity-80">{canTranslate ? t('hero.hello') : '¡Hola Mundo!'}</motion.p>

        <Typewriter
          repeat={false}
          fadeIn
          customClass="min-h-14 text-balance leading-tight text-5xl md:text-6xl font-extrabold"
          words={principalWords}

        />

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18, scaleX: prefersReducedMotion ? 1 : 0.65 }}
          animate={{ opacity: 1, y: 0, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0.5 }}
          className="text-lg md:text-2xl text-zinc-300">{canTranslate ? t('hero.role') : profile.role.es}</motion.p>

        <Typewriter
          repeat
          fadeIn
          showCursor={false}
          customClass="md:text-base font-mono min-h-6 text-sm text-zinc-400"
          words={secondaryWords}
        />
       
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-16 md:mt-20">
        <a href="#projects" className="btn btn-primary text-center">{canTranslate ? t('hero.cta.projects') : 'Ver Proyectos'}</a>
        <button className="btn btn-outline">{canTranslate ? t('hero.cta.cv') : 'Descargar CV'}</button>
      </div>
      <div className='mt-30 w-full flex justify-center items-center gap-4 md:gap-8'>
        <SocialLinks
          href={profile.linkedin}
          ariaLabel={canTranslate ? t('hero.linkedin.aria') : 'Abrir LinkedIn de Joan Blanco'}

          variant="outline"
          className='w'
        >
          <LinkedInIcon />
        </SocialLinks>

        <SocialLinks
          href={profile.github}
          ariaLabel={canTranslate ? t('hero.github.aria') : 'Abrir GitHub de Joan Blanco'}

          variant="outline"
        >
          <GitHubIcon />
        </SocialLinks>
      </div>
    </motion.section>
  )
}
