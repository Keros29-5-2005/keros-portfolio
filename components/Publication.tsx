import Section from './Section'

export default function Publication() {
  return (
    <Section
      id="publication"
      eyebrow="Research"
      title="Research publication."
      subtitle="A published research contribution presented through a dedicated academic-style interface."
    >
      <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-transparent p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
          EPJ Web of Conferences
        </p>

        <h3 className="mt-4 text-3xl font-semibold">
          EPJ Web of Conferences 367, 01010 (2026)
        </h3>

        <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">
          Published conference research presented in EPJ Web of Conferences.
          This section is designed to highlight academic and research-oriented
          work alongside engineering and software projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://doi.org/10.1051/epjconf/202636701010"
            target="_blank"
            className="rounded-full bg-purple-600 px-6 py-3 font-medium transition hover:bg-purple-500"
          >
            View DOI
          </a>

          <a
            href="https://www.epj-conferences.org/articles/epjconf/pdf/2026/23/epjconf_riact2026_01010.pdf"
            target="_blank"
            className="rounded-full border border-white/10 px-6 py-3 text-white/80 transition hover:border-purple-400 hover:text-white"
          >
            Read Publication
          </a>
        </div>
      </div>
    </Section>
  )
}