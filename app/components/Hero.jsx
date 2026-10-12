export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
            Independent Creative Studio • London
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-none">
            Aura Studio
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
            Bringing Ideas to Life
          </h2>

          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            A London-based creative agency helping brands express their identity
            through modern, minimalist design.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
          >
            Get in Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Right visual – replace with your actual 3D asset */}
        <div className="relative flex justify-center lg:justify-end">
<div className="relative w-full max-w-4xl aspect-square ...">
            {/* Placeholder for the metallic ribbon + blue spheres */}
            <img
              src="/project 1 pics.JPG"
              alt="Aura Studio abstract form"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}