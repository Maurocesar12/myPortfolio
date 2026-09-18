const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const GRID_MASK =
  'radial-gradient(ellipse 85% 65% at 50% 22%, #000 20%, transparent 85%)';

/**
 * Camada de fundo compartilhada por todas as seções: facho de luz no topo,
 * grade técnica alinhada ao centro do conteúdo, trilhos na largura do
 * container, auroras em movimento lento e um grão sutil por cima.
 */
const BackgroundFX = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Facho de luz no topo. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 45% at 50% -10%, rgba(100,255,218,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Auroras: gradientes suaves com deriva lenta. */}
      <div
        className="absolute left-[4%] top-[6%] h-[34rem] w-[34rem] will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(100,255,218,0.13) 0%, transparent 65%)',
          animation: 'aurora-a 26s ease-in-out infinite',
        }}
      />
      <div
        className="absolute right-[2%] top-[34%] h-[30rem] w-[30rem] will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(56,132,255,0.11) 0%, transparent 65%)',
          animation: 'aurora-b 32s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-[-6%] left-[26%] h-[38rem] w-[38rem] will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(100,255,218,0.08) 0%, transparent 65%)',
          animation: 'aurora-c 38s ease-in-out infinite',
        }}
      />

      {/* Grade técnica centralizada junto com o conteúdo. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(100,255,218,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,255,218,0.05) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          backgroundPosition: '50% 0',
          maskImage: GRID_MASK,
          WebkitMaskImage: GRID_MASK,
        }}
      />

      {/* Trilhos marcando a largura do container das seções. */}
      <div className="absolute inset-0 hidden justify-center lg:flex">
        <div className="h-full w-full max-w-6xl border-x border-green/[0.07]" />
      </div>

      {/* Escurece a base para assentar o conteúdo. */}
      <div
        className="absolute inset-x-0 bottom-0 h-72"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(10,14,26,0.85) 100%)',
        }}
      />

      {/* Grão sutil por cima de tudo. */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: NOISE }}
      />
    </div>
  );
};

export default BackgroundFX;
