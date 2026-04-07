/**
 * MotionProvider — Envuelve islands con LazyMotion para cargar
 * las features de animación de forma diferida (domAnimation ~18 KB).
 *
 * Todos los islands deben usar `m.div`, `m.section`, etc. en lugar
 * de `motion.div` para aprovechar el lazy loading.
 */
import { LazyMotion, domAnimation } from 'motion/react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function MotionProvider({ children }: Props) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
