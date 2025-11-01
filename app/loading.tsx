export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full animate-pulse" />
          <div className="relative w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <span className="text-white font-bold text-3xl">W</span>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-amber-100 mb-2">
          Loading Safari Experience...
        </h2>
        <p className="text-sm text-gray-400">
          Preparing your wilderness adventure
        </p>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mt-6 mx-auto">
          <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 w-3/4 animate-pulse" />
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
