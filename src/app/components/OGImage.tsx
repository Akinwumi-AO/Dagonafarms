import logoDark from "figma:asset/c53c6f4b27ee8279ac0a86decce00a8bd6e66939.png";

export default function OGImage() {
  return (
    <div className="relative w-[1200px] h-[630px] bg-gradient-to-br from-green-800 via-green-700 to-green-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Shapes - Agricultural Theme */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-600/20 rounded-full blur-3xl"></div>

      {/* Leaf Decorations */}
      <div className="absolute top-12 right-24 opacity-20">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-32 opacity-15 rotate-45">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z" fill="white"/>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-20">
        {/* Logo */}
        <div className="mb-8 bg-white/95 p-8 rounded-3xl shadow-2xl">
          <img
            src={logoDark}
            alt="Dagona Farms Logo"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Main Text */}
        <div className="text-center">
          <h1 className="text-8xl font-bold text-white mb-4 tracking-tight">
            Dagona Farms
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-24 bg-amber-400 rounded"></div>
            <p className="text-4xl text-green-100 font-light">
              Home of Agriculture
            </p>
            <div className="h-1 w-24 bg-amber-400 rounded"></div>
          </div>
          <p className="text-2xl text-green-200 max-w-3xl mx-auto leading-relaxed">
            Modern, Sustainable & Technology-Driven Farming Solutions
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full">
            <span className="text-3xl">🌾</span>
            <span className="text-white text-xl font-light">Crop Production</span>
            <span className="text-white/40 text-xl">•</span>
            <span className="text-3xl">🐄</span>
            <span className="text-white text-xl font-light">Livestock</span>
            <span className="text-white/40 text-xl">•</span>
            <span className="text-3xl">🐟</span>
            <span className="text-white text-xl font-light">Aquaculture</span>
          </div>
        </div>
      </div>

      {/* Corner Badge */}
      <div className="absolute top-8 left-8 bg-amber-500 text-white px-6 py-3 rounded-full shadow-lg">
        <p className="text-sm font-semibold">EST. 2025</p>
      </div>
    </div>
  );
}
