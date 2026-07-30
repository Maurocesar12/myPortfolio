import { useEffect, useRef } from 'react';

/**
 * CursorGlow
 * Um ponto pequeno acompanha o ponteiro com precisão e uma "sombra"
 * (halo verde desfocado) segue o cursor com um leve atraso, criando o
 * efeito de rastro.
 *
 * - Desativado em telas de toque (celular/tablet).
 * - Sob "reduzir movimento", o efeito continua visível, mas sem o
 *   atraso do rastro (a sombra segue o cursor instantaneamente).
 */
const CursorGlow = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Só desativa em dispositivos sem mouse (toque).
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      !window.matchMedia('(pointer: fine)').matches;
    if (isTouch) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    // Sem movimento reduzido: rastro suave (0.18). Com: sem atraso (1).
    const ease = prefersReducedMotion ? 1 : 0.18;

    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    // Posição real do mouse e posição interpolada da sombra.
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const trail = { x: mouse.x, y: mouse.y };

    let rafId = 0;
    let visible = false;

    const show = () => {
      if (visible) return;
      visible = true;
      dot.style.opacity = '1';
      glow.style.opacity = '1';
    };

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      show();
      // O ponto segue o cursor instantaneamente.
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
    };

    const handleLeave = () => {
      visible = false;
      dot.style.opacity = '0';
      glow.style.opacity = '0';
    };

    // Cresce a sombra ao passar sobre elementos interativos.
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, [role="button"], input, textarea, select, label, .cursor-pointer'
      );
      glow.style.setProperty('--scale', interactive ? '2' : '1');
    };

    const render = () => {
      // Interpolação (lerp) para o atraso suave da sombra.
      trail.x += (mouse.x - trail.x) * ease;
      trail.y += (mouse.y - trail.y) * ease;
      glow.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%) scale(var(--scale, 1))`;
      rafId = requestAnimationFrame(render);
    };

    render();
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Sombra / halo que segue com atraso. */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-10 w-10 rounded-full opacity-0 transition-opacity duration-300 will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(100,255,218,0.45) 0%, rgba(100,255,218,0.15) 45%, transparent 72%)',
          filter: 'blur(4px)',
        }}
      />
      {/* Ponto que acompanha o ponteiro. */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-2 w-2 rounded-full bg-green opacity-0 transition-opacity duration-300 will-change-transform"
        style={{ boxShadow: '0 0 10px 2px rgba(100,255,218,0.9)' }}
      />
    </div>
  );
};

export default CursorGlow;
