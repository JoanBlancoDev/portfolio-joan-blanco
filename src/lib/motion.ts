/**
 * Central motion export usando LazyMotion + domAnimation features.
 *
 * LazyMotion carga las animaciones de forma diferida (~18 KB en lugar de 123 KB).
 * Los componentes `m.*` son el equivalente lightweight de `motion.*`.
 *
 * Exportamos todo desde aquí para un único punto de control.
 */
export { m, LazyMotion, AnimatePresence, useReducedMotion } from 'motion/react';
export { domAnimation } from 'motion/react';
