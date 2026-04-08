/**
 * Carga i18n en un chunk aparte después del primer frame para no competir
 * con el parse/hidratación en el arranque (mejor en móvil / TBT en prod).
 */
function loadI18nChunk() {
  void import('./i18n-loader');
}

function runAfterFirstPaint() {
  if (typeof window.requestAnimationFrame === 'function') {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(loadI18nChunk);
    });
  } else {
    window.setTimeout(loadI18nChunk, 0);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runAfterFirstPaint, { once: true });
} else {
  runAfterFirstPaint();
}
