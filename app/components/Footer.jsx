export default function Footer() {
  return (
    <section id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Let’s make<br />something matter.
            </h2>
            <p className="text-gray-400 text-lg max-w-md">
              Have an idea, a challenge, or a fresh perspective?
              We’d love to hear what you have in mind.
            </p>
            <p className="text-sm text-gray-500">
              London, UK · Creating without boundaries.
            </p>
          </div>

          {/* Contact form */}
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors"
            >
              Send Message
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
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar – Updated */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Aura Studio</span>
            <span className="text-blue-500">.</span>
          </div>

          <p>London, UK · Creating without boundaries.</p>

          <p>© 2026 Aura Studio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}