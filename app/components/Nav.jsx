export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-semibold tracking-tight text-gray-900">
          Aura Studio<span className="text-blue-600">.</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}