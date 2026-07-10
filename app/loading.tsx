export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zacon-light-ultra">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 animate-pulse">
          <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-zacon-corporate to-zacon-corporate-light shadow-glow flex items-center justify-center">
            <span className="text-3xl font-bold text-white">Z</span>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-zacon-corporate animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 rounded-full bg-zacon-corporate animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 rounded-full bg-zacon-corporate animate-bounce"></div>
        </div>

        {/* Text */}
        <p className="mt-4 text-sm text-zacon-graphite-muted">
          Carregando...
        </p>
      </div>
    </div>
  );
}
