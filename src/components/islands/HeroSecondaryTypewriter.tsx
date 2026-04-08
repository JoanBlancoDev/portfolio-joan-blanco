import { useLayoutEffect, useState } from 'react';
import Typewriter from './Typewriter';

type Lang = 'es' | 'en';

const readLang = (): Lang =>
  document.documentElement.dataset.lang === 'en' ? 'en' : 'es';

type Props = {
  wordsEs: readonly string[];
  wordsEn: readonly string[];
};

export function HeroSecondaryTypewriter({ wordsEs, wordsEn }: Props) {
  const [lang, setLang] = useState<Lang>('es');

  useLayoutEffect(() => {
    setLang(readLang());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ lang?: string }>).detail;
      if (detail?.lang === 'en' || detail?.lang === 'es') {
        setLang(detail.lang);
      } else {
        setLang(readLang());
      }
    };
    window.addEventListener('app:lang-change', onChange);
    return () => window.removeEventListener('app:lang-change', onChange);
  }, []);

  const words = lang === 'en' ? [...wordsEn] : [...wordsEs];

  return (
    <Typewriter
      key={lang}
      repeat
      fadeIn
      showCursor={false}
      customClass="text-body-muted md:text-base font-mono min-h-6 text-sm"
      words={words}
    />
  );
}
