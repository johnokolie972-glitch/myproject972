export default function Services() {
  const services = [
    {
      number: "01",
      title: "Branding",
      description:
        "Distinctive identities that tell your story. From the first impression to every detail that follows.",
      tags: "Brand strategy · Storytelling · Logo & graphic systems",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "UI/UX Design",
      description:
        "Thoughtful digital experiences that put people first. Intuitive, engaging, and effortlessly functional.",
      tags: "Interface design · Wireframing · Prototyping",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Web Design",
      description:
        "Beautiful websites with a clear purpose. Modern, responsive, and designed to move your brand forward.",
      tags: "Website design · Responsive design · Digital experiences",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-3">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl">
            Thoughtfully designed. Meaningfully different.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {service.icon}
                </div>
                <span className="text-sm font-medium text-gray-400">
                  {service.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <p className="text-sm text-gray-400">
                {service.tags}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}